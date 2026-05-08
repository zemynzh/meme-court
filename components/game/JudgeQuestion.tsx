'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { GavelIcon } from '@/components/ui/Icons'
import { MoodMeter } from '@/components/ui/MoodMeter'
import { ConfidentBurst, HumbleBurst, DeflectBurst, FunnyBurst } from '@/components/game/ActionBursts'
import type { JudgeAnswer, JudgeMood } from '@/lib/game-types'

interface JudgeQuestionProps {
  question: string
  mood: JudgeMood
  onAnswer: (answer: JudgeAnswer) => void
}

interface AnswerOption {
  value: JudgeAnswer
  labelKey: string
  descKey: string
  color: string
  bgColor: string
}

const ANSWER_OPTIONS: AnswerOption[] = [
  { value: 'confident', labelKey: 'judgeQ.confident', descKey: 'judgeQ.confidentDesc', color: '#00C8FF', bgColor: 'rgba(0,200,255,0.08)' },
  { value: 'humble',    labelKey: 'judgeQ.humble',    descKey: 'judgeQ.humbleDesc',    color: '#00E5A0', bgColor: 'rgba(0,229,160,0.08)' },
  { value: 'deflect',   labelKey: 'judgeQ.deflect',   descKey: 'judgeQ.deflectDesc',   color: '#FFB800', bgColor: 'rgba(255,184,0,0.08)' },
  { value: 'funny',     labelKey: 'judgeQ.funny',     descKey: 'judgeQ.funnyDesc',     color: '#FF2D78', bgColor: 'rgba(255,45,120,0.08)' },
]

export function JudgeQuestion({ question, mood, onAnswer }: JudgeQuestionProps) {
  const { t } = useTranslation()
  const [hovered, setHovered] = useState<JudgeAnswer | null>(null)
  const [activeBurst, setActiveBurst] = useState<JudgeAnswer | null>(null)

  const handleAnswer = (answer: JudgeAnswer) => {
    setActiveBurst(answer)
  }

  const handleBurstComplete = (answer: JudgeAnswer) => {
    setActiveBurst(null)
    onAnswer(answer)
  }

  const moodLabels: Record<JudgeMood, string> = {
    annoyed:   t('witness.moods.annoyed'),
    confused:  t('witness.moods.confused'),
    amused:    t('witness.moods.amused'),
    impressed: t('witness.moods.impressed'),
    convinced: t('witness.moods.convinced'),
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="phase-inner"
    >
      <AnimatePresence>
        {activeBurst === 'confident' && <ConfidentBurst onComplete={() => handleBurstComplete('confident')} />}
        {activeBurst === 'humble'    && <HumbleBurst    onComplete={() => handleBurstComplete('humble')} />}
        {activeBurst === 'deflect'   && <DeflectBurst   onComplete={() => handleBurstComplete('deflect')} />}
        {activeBurst === 'funny'     && <FunnyBurst     onComplete={() => handleBurstComplete('funny')} />}
      </AnimatePresence>
      {/* ── Header ── */}
      <div>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '6px' }}>
          {t('judgeQ.label')}
        </p>
        <h2 style={{ fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.2 }}>
          {t('judgeQ.title')}
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: 1.5 }}>
          {t('judgeQ.subtitle')}
        </p>
      </div>

      {/* ── Mood meter — compact ── */}
      <div style={{ padding: '10px 14px', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '10px' }}>
        <MoodMeter mood={mood} label={t('witness.moodLabel')} moodLabels={moodLabels} />
      </div>

      <div style={{ height: '1px', background: 'var(--border)' }} />

      {/* ── Judge identity + question ── */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
            background: 'rgba(255,45,120,0.08)',
            border: '1px solid rgba(255,45,120,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--accent-primary)',
          }}>
            <GavelIcon size={20} />
          </div>
          <div>
            <p style={{ fontSize: '14px', fontWeight: 800, color: 'var(--accent-primary)', lineHeight: 1.2 }}>
              {t('judgeQ.judgeTitle')}
            </p>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
              {t('judgeQ.presiding')}
            </p>
          </div>
        </div>

        <div style={{
          padding: '18px 20px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderLeft: '3px solid var(--accent-primary)',
          borderRadius: '0 12px 12px 0',
        }}>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-primary)', fontWeight: 500 }}>
            &ldquo;{question}&rdquo;
          </p>
        </div>
      </div>

      <div style={{ height: '1px', background: 'var(--border)' }} />

      {/* ── Answer options ── */}
      <div>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
          {t('judgeQ.chooseResponse')}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {ANSWER_OPTIONS.map((opt, i) => (
            <motion.button
              key={opt.value}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleAnswer(opt.value)}
              onMouseEnter={() => setHovered(opt.value)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: '16px 14px',
                background: hovered === opt.value ? opt.bgColor : 'var(--bg-surface)',
                border: `1px solid ${hovered === opt.value ? opt.color + '50' : 'var(--border)'}`,
                borderRadius: '12px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 0.15s ease, border-color 0.15s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              <p style={{ fontSize: '13px', fontWeight: 700, color: opt.color, lineHeight: 1.2 }}>
                {t(opt.labelKey)}
              </p>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                {t(opt.descKey)}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

    </motion.div>
  )
}
