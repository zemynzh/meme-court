'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import type {
  GamePhase,
  GameSession,
  GameCase,
  Evidence,
  QuestioningStyle,
  JudgeAnswer,
  JudgeMood,
  Verdict,
  RebuttalResult,
} from '@/lib/game-types'

const MOOD_VALUES: Record<JudgeMood, number> = {
  annoyed:   10,
  confused:  30,
  amused:    55,
  impressed: 75,
  convinced: 95,
}

function moodFromValue(value: number): JudgeMood {
  if (value >= 85) return 'convinced'
  if (value >= 65) return 'impressed'
  if (value >= 45) return 'amused'
  if (value >= 25) return 'confused'
  return 'annoyed'
}

interface GameContextValue {
  phase: GamePhase
  session: GameSession
  verdict: Verdict | null
  setPhase: (phase: GamePhase) => void
  setCase: (gameCase: GameCase) => void
  toggleEvidence: (evidence: Evidence) => void   // select/deselect, max 2
  setWitness1Style: (style: QuestioningStyle) => void
  setWitness2Style: (style: QuestioningStyle) => void
  setRebuttal1: (result: RebuttalResult) => void
  setRebuttal2: (result: RebuttalResult) => void
  setJudgeAnswer: (answer: JudgeAnswer) => void
  setFinalArgument: (text: string) => void
  setVerdict: (verdict: Verdict) => void
  updateMood: (delta: number) => void
  resetGame: () => void
}

const defaultSession: GameSession = {
  case: null,
  selectedEvidences: [],
  witness1Style: null,
  witness2Style: null,
  rebuttal1: null,
  rebuttal2: null,
  judgeAnswer: null,
  finalArgument: '',
  moodHistory: ['annoyed'],
  currentMood: 'annoyed',
}

const GameContext = createContext<GameContextValue | null>(null)

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<GamePhase>('idle')
  const [session, setSession] = useState<GameSession>(defaultSession)
  const [verdict, setVerdictState] = useState<Verdict | null>(null)
  const [moodValue, setMoodValue] = useState(MOOD_VALUES.annoyed)

  const applyMoodDelta = useCallback((delta: number) => {
    setMoodValue((prev) => {
      const next = Math.max(0, Math.min(100, prev + delta))
      const mood = moodFromValue(next)
      setSession((s) => ({
        ...s,
        currentMood: mood,
        moodHistory: [...s.moodHistory, mood],
      }))
      return next
    })
  }, [])

  const setCase = useCallback((gameCase: GameCase) => {
    setSession((prev) => ({ ...prev, case: gameCase }))
  }, [])

  // Toggle evidence selection — max 2 at a time
  const toggleEvidence = useCallback((evidence: Evidence) => {
    setSession((prev) => {
      const already = prev.selectedEvidences.find((e) => e.id === evidence.id)
      if (already) {
        // Deselect
        return { ...prev, selectedEvidences: prev.selectedEvidences.filter((e) => e.id !== evidence.id) }
      }
      if (prev.selectedEvidences.length >= 2) {
        // Already at max — replace the oldest selection
        return { ...prev, selectedEvidences: [prev.selectedEvidences[1], evidence] }
      }
      return { ...prev, selectedEvidences: [...prev.selectedEvidences, evidence] }
    })
    applyMoodDelta(5)
  }, [applyMoodDelta])

  const STYLE_DELTAS: Record<QuestioningStyle, number> = {
    polite:    10,
    objection: 15,
    evidence:  12,
    roast:      8,
  }

  const ANSWER_DELTAS: Record<JudgeAnswer, number> = {
    confident: 12,
    humble:    10,
    deflect:    6,
    funny:     14,
  }

  const setWitness1Style = useCallback((style: QuestioningStyle) => {
    setSession((prev) => ({ ...prev, witness1Style: style }))
    applyMoodDelta(STYLE_DELTAS[style])
  }, [applyMoodDelta]) // eslint-disable-line react-hooks/exhaustive-deps

  const setWitness2Style = useCallback((style: QuestioningStyle) => {
    setSession((prev) => ({ ...prev, witness2Style: style }))
    applyMoodDelta(STYLE_DELTAS[style])
  }, [applyMoodDelta]) // eslint-disable-line react-hooks/exhaustive-deps

  const setRebuttal1 = useCallback((result: RebuttalResult) => {
    setSession((prev) => ({ ...prev, rebuttal1: result }))
  }, [])

  const setRebuttal2 = useCallback((result: RebuttalResult) => {
    setSession((prev) => ({ ...prev, rebuttal2: result }))
  }, [])

  const setJudgeAnswer = useCallback((answer: JudgeAnswer) => {
    setSession((prev) => ({ ...prev, judgeAnswer: answer }))
    applyMoodDelta(ANSWER_DELTAS[answer])
  }, [applyMoodDelta]) // eslint-disable-line react-hooks/exhaustive-deps

  const setFinalArgument = useCallback((text: string) => {
    setSession((prev) => ({ ...prev, finalArgument: text }))
  }, [])

  const setVerdict = useCallback((v: Verdict) => {
    setVerdictState(v)
  }, [])

  const updateMood = useCallback((delta: number) => {
    applyMoodDelta(delta)
  }, [applyMoodDelta])

  const resetGame = useCallback(() => {
    setPhase('idle')
    setSession(defaultSession)
    setVerdictState(null)
    setMoodValue(MOOD_VALUES.annoyed)
  }, [])

  return (
    <GameContext.Provider
      value={{
        phase,
        session,
        verdict,
        setPhase,
        setCase,
        toggleEvidence,
        setWitness1Style,
        setWitness2Style,
        setRebuttal1,
        setRebuttal2,
        setJudgeAnswer,
        setFinalArgument,
        setVerdict,
        updateMood,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export function useGame(): GameContextValue {
  const ctx = useContext(GameContext)
  if (!ctx) throw new Error('useGame must be used within GameProvider')
  return ctx
}
