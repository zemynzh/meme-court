'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import { GameProvider, useGame } from '@/context/GameContext'
import { useTranslation } from '@/hooks/useTranslation'
import { LoadingCourt } from '@/components/game/LoadingCourt'
import { OpeningStatement } from '@/components/game/OpeningStatement'
import { CaseCard } from '@/components/game/CaseCard'
import { EvidencePhase } from '@/components/game/EvidenceCard'
import { WitnessPanel } from '@/components/game/WitnessPanel'
import { WitnessRebuttal } from '@/components/game/WitnessRebuttal'
import { JudgeQuestion } from '@/components/game/JudgeQuestion'
import { DefenseInput } from '@/components/game/DefenseInput'
import { VerdictScreen } from '@/components/game/VerdictScreen'
import { TrialSidebar } from '@/components/game/TrialSidebar'
import { shareResult } from '@/lib/share'
import type { GameCase, QuestioningStyle, JudgeAnswer, Verdict, RebuttalResult } from '@/lib/game-types'

// ── Rebuttal fetcher — called once per witness in the page layer ──────────────

interface RebuttalFetchParams {
  witnessName: string
  witnessRole: string
  witnessTestimony: string
  witnessPersonality: string
  witnessRebuttal: string
  witnessNumber: 1 | 2
  questioningStyle: QuestioningStyle
  language: string
  caseTitle: string
  caseDefendant: string
  caseCharge: string
  selectedEvidenceNames: string[]
  currentMood: string
}

async function fetchRebuttal(params: RebuttalFetchParams): Promise<RebuttalResult> {
  const res = await fetch('/api/generate-witness-rebuttal', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  })
  const json = await res.json()
  if (json.data) return json.data as RebuttalResult
  throw new Error('Invalid rebuttal response')
}

// ── Main trial flow ───────────────────────────────────────────────────────────

function TrialFlow() {
  const {
    phase, session, verdict,
    setPhase, setCase,
    toggleEvidence,
    setWitness1Style, setWitness2Style,
    setRebuttal1, setRebuttal2,
    setJudgeAnswer,
    setFinalArgument, setVerdict,
    updateMood,
    resetGame,
  } = useGame()

  const { t, lang } = useTranslation()
  const [caseNumber] = useState(() => Math.floor(Math.random() * 900) + 100)
  const [shareToast, setShareToast] = useState<string | null>(null)
  const [rebuttalLoading, setRebuttalLoading] = useState(false)

  const phaseRef = useRef(phase)
  useEffect(() => { phaseRef.current = phase }, [phase])

  const isEarlyPhase = (p: string) =>
    p === 'idle' || p === 'loading_case' || p === 'opening' || p === 'case_reveal'

  const fetchCase = useCallback(async (language: string) => {
    setPhase('loading_case')
    try {
      const res = await fetch('/api/generate-case', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language }),
      })
      const json = await res.json()
      const gameCase: GameCase = json.data
      setCase(gameCase)
      setPhase('opening')
    } catch {
      setPhase('opening')
    }
  }, [setPhase, setCase])

  useEffect(() => {
    fetchCase(lang)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isEarlyPhase(phaseRef.current)) {
      fetchCase(lang)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  // ── Phase handlers ──────────────────────────────────────────────────────────

  const handleOpeningDone = () => setPhase('case_reveal')
  const handleStartDefense = () => setPhase('evidence')
  const handleEvidenceConfirm = () => setPhase('witness_1')

  // Witness 1: record style → fire AI once → show rebuttal phase
  const handleWitness1Style = async (style: QuestioningStyle) => {
    setWitness1Style(style)
    setRebuttalLoading(true)
    setPhase('witness_1_rebuttal')

    const w1 = session.case?.witnesses[0]
    if (!w1 || !session.case) { setRebuttalLoading(false); return }

    try {
      const result = await fetchRebuttal({
        witnessName: w1.name,
        witnessRole: w1.role,
        witnessTestimony: w1.testimony,
        witnessPersonality: w1.personality,
        witnessRebuttal: w1.rebuttal,
        witnessNumber: 1,
        questioningStyle: style,
        language: lang,
        caseTitle: session.case.title,
        caseDefendant: session.case.defendant,
        caseCharge: session.case.charge,
        selectedEvidenceNames: session.selectedEvidences.map(e => e.name),
        currentMood: session.currentMood,
      })
      setRebuttal1(result)
    } catch {
      setRebuttal1({ rebuttal: w1.rebuttal, moodChange: 0, reaction: 'defensive' })
    } finally {
      setRebuttalLoading(false)
    }
  }

  const handleWitness1RebuttalDone = (moodChange: number) => {
    updateMood(moodChange)
    setPhase('witness_2')
  }

  // Witness 2: same pattern
  const handleWitness2Style = async (style: QuestioningStyle) => {
    setWitness2Style(style)
    setRebuttalLoading(true)
    setPhase('witness_2_rebuttal')

    const w2 = session.case?.witnesses[1]
    if (!w2 || !session.case) { setRebuttalLoading(false); return }

    try {
      const result = await fetchRebuttal({
        witnessName: w2.name,
        witnessRole: w2.role,
        witnessTestimony: w2.testimony,
        witnessPersonality: w2.personality,
        witnessRebuttal: w2.rebuttal,
        witnessNumber: 2,
        questioningStyle: style,
        language: lang,
        caseTitle: session.case.title,
        caseDefendant: session.case.defendant,
        caseCharge: session.case.charge,
        selectedEvidenceNames: session.selectedEvidences.map(e => e.name),
        currentMood: session.currentMood,
      })
      setRebuttal2(result)
    } catch {
      setRebuttal2({ rebuttal: w2.rebuttal, moodChange: 0, reaction: 'defensive' })
    } finally {
      setRebuttalLoading(false)
    }
  }

  const handleWitness2RebuttalDone = (moodChange: number) => {
    updateMood(moodChange)
    setPhase('judge_question')
  }

  const handleJudgeAnswer = (answer: JudgeAnswer) => {
    setJudgeAnswer(answer)
    setPhase('defense')
  }

  const handleDefenseSubmit = async (argument: string) => {
    setFinalArgument(argument)
    setPhase('loading_verdict')
    try {
      const res = await fetch('/api/generate-verdict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session: { ...session, finalArgument: argument }, language: lang }),
      })
      const json = await res.json()
      const v: Verdict = json.data
      setVerdict(v)
      setPhase('verdict')
    } catch {
      setPhase('verdict')
    }
  }

  const handlePlayAgain = () => {
    resetGame()
    window.location.href = '/'
  }

  const handleShare = async () => {
    if (!verdict || !session.case) return
    const shareText = t('verdict.shareText')
    const result = await shareResult(verdict, session.case.title, shareText)
    if (result === 'copied') {
      setShareToast(t('errors.copySuccess'))
      setTimeout(() => setShareToast(null), 2500)
    } else if (result === 'failed') {
      setShareToast(t('errors.copyFail'))
      setTimeout(() => setShareToast(null), 2500)
    }
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  const w1 = session.case?.witnesses[0]
  const w2 = session.case?.witnesses[1]

  return (
    <div className="game-panel">
      <div className="trial-layout">
        <div className="trial-main">
          <div className="phase-content">
            <AnimatePresence mode="wait">

              {(phase === 'loading_case' || phase === 'loading_verdict') && (
                <LoadingCourt key="loading" />
              )}

              {phase === 'opening' && session.case && (
                <OpeningStatement
                  key="opening"
                  statement={session.case.openingStatement}
                  caseTitle={session.case.title}
                  onContinue={handleOpeningDone}
                />
              )}

              {phase === 'case_reveal' && session.case && (
                <CaseCard
                  key="case"
                  gameCase={session.case}
                  caseNumber={caseNumber}
                  onStartDefense={handleStartDefense}
                />
              )}

              {phase === 'evidence' && session.case && (
                <EvidencePhase
                  key="evidence"
                  evidenceCards={session.case.evidenceCards}
                  selectedEvidences={session.selectedEvidences}
                  onToggle={toggleEvidence}
                  onConfirm={handleEvidenceConfirm}
                />
              )}

              {phase === 'witness_1' && w1 && (
                <WitnessPanel
                  key="witness1"
                  witness={w1}
                  witnessNumber={1}
                  mood={session.currentMood}
                  onChooseStyle={handleWitness1Style}
                />
              )}

              {phase === 'witness_1_rebuttal' && w1 && (
                <WitnessRebuttal
                  key="rebuttal1"
                  witness={w1}
                  witnessNumber={1}
                  rebuttalResult={session.rebuttal1}
                  isLoading={rebuttalLoading}
                  onContinue={handleWitness1RebuttalDone}
                />
              )}

              {phase === 'witness_2' && w2 && (
                <WitnessPanel
                  key="witness2"
                  witness={w2}
                  witnessNumber={2}
                  mood={session.currentMood}
                  onChooseStyle={handleWitness2Style}
                />
              )}

              {phase === 'witness_2_rebuttal' && w2 && (
                <WitnessRebuttal
                  key="rebuttal2"
                  witness={w2}
                  witnessNumber={2}
                  rebuttalResult={session.rebuttal2}
                  isLoading={rebuttalLoading}
                  onContinue={handleWitness2RebuttalDone}
                />
              )}

              {phase === 'judge_question' && session.case && (
                <JudgeQuestion
                  key="judge-q"
                  question={session.case.judgeQuestion}
                  mood={session.currentMood}
                  onAnswer={handleJudgeAnswer}
                />
              )}

              {phase === 'defense' && session.case && (
                <DefenseInput
                  key="defense"
                  selectedEvidences={session.selectedEvidences}
                  witnessTestimony={w1?.testimony ?? ''}
                  mood={session.currentMood}
                  onSubmit={handleDefenseSubmit}
                  isLoading={false}
                />
              )}

              {phase === 'verdict' && verdict && session.case && (
                <VerdictScreen
                  key="verdict"
                  verdict={verdict}
                  caseTitle={session.case.title}
                  onPlayAgain={handlePlayAgain}
                  onShare={handleShare}
                />
              )}

            </AnimatePresence>
          </div>
        </div>

        <aside className="trial-sidebar">
          <TrialSidebar session={session} phase={phase} verdict={verdict} />
        </aside>
      </div>

      <AnimatePresence>
        {shareToast && (
          <div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl text-sm font-medium z-50"
            style={{ background: 'var(--accent-primary)', color: '#fff', boxShadow: 'var(--glow-primary)' }}
          >
            {shareToast}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function TrialPage() {
  return (
    <GameProvider>
      <TrialFlow />
    </GameProvider>
  )
}
