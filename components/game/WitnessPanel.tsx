'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { MoodMeter } from '@/components/ui/MoodMeter'
import { ObjectionBurst, PoliteBurst, EvidenceBurst, RoastBurst } from '@/components/game/ActionBursts'
import { HandshakeIcon, RaisedHandIcon, SearchIcon, ZapIcon, UserIcon } from '@/components/ui/Icons'
import type { Witness, QuestioningStyle, JudgeMood } from '@/lib/game-types'

interface WitnessPanelProps {
  witness: Witness
  witnessNumber: 1 | 2
  mood: JudgeMood
  onChooseStyle: (style: QuestioningStyle) => void
}

interface StyleButton {
  style: QuestioningStyle
  labelKey: string
  descKey: string
  icon: React.ReactNode
  color: string
  bgColor: string
}

const STYLE_BUTTONS: StyleButton[] = [
  {
    style: 'polite',
    labelKey: 'witness.buttons.polite',
    descKey: 'witness.buttons.politeDesc',
    icon: <HandshakeIcon size={22} />,
    color: '#00C8FF',
    bgColor: 'rgba(0,200,255,0.08)',
  },
  {
    style: 'objection',
    labelKey: 'witness.buttons.objection',
    descKey: 'witness.buttons.objectionDesc',
    icon: <RaisedHandIcon size={22} />,
    color: '#FF2D78',
    bgColor: 'rgba(255,45,120,0.08)',
  },
  {
    style: 'evidence',
    labelKey: 'witness.buttons.evidence',
    descKey: 'witness.buttons.evidenceDesc',
    icon: <SearchIcon size={22} />,
    color: '#FFB800',
    bgColor: 'rgba(255,184,0,0.08)',
  },
  {
    style: 'roast',
    labelKey: 'witness.buttons.roast',
    descKey: 'witness.buttons.roastDesc',
    icon: <ZapIcon size={22} />,
    color: '#FF6B35',
    bgColor: 'rgba(255,107,53,0.08)',
  },
]

export function WitnessPanel({ witness, witnessNumber, mood, onChooseStyle }: WitnessPanelProps) {
  const { t } = useTranslation()
  const [activeBurst, setActiveBurst] = useState<QuestioningStyle | null>(null)
  const [hovered, setHovered] = useState<QuestioningStyle | null>(null)

  const handleStyle = (style: QuestioningStyle) => {
    setActiveBurst(style)
  }

  const handleBurstComplete = (style: QuestioningStyle) => {
    setActiveBurst(null)
    onChooseStyle(style)
  }
  const moodLabels: Record<JudgeMood, string> = {
    annoyed:   t('witness.moods.annoyed'),
    confused:  t('witness.moods.confused'),
    amused:    t('witness.moods.amused'),
    impressed: t('witness.moods.impressed'),
    convinced: t('witness.moods.convinced'),
  }

  return (
    <>
      <AnimatePresence>
        {activeBurst === 'objection' && (
          <ObjectionBurst onComplete={() => handleBurstComplete('objection')} />
        )}
        {activeBurst === 'polite' && (
          <PoliteBurst onComplete={() => handleBurstComplete('polite')} />
        )}
        {activeBurst === 'evidence' && (
          <EvidenceBurst onComplete={() => handleBurstComplete('evidence')} />
        )}
        {activeBurst === 'roast' && (
          <RoastBurst onComplete={() => handleBurstComplete('roast')} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.35 }}
        className="phase-inner"
      >
        {/* ── Header ── */}
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '6px' }}>
            {t('witness.witnessLabel')} {witnessNumber}
          </p>
          <h2 style={{ fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.2 }}>
            {t('witness.title')}
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: 1.5 }}>
            {t('witness.subtitle')}
          </p>
        </div>

        {/* ── Mood meter — compact inline ── */}
        <div style={{
          padding: '10px 14px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
        }}>
          <MoodMeter mood={mood} label={t('witness.moodLabel')} moodLabels={moodLabels} />
        </div>

        <div style={{ height: '1px', background: 'var(--border)' }} />

        {/* ── Witness identity ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '14px', flexShrink: 0,
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--text-secondary)',
          }}>
            <UserIcon size={22} />
          </div>
          <div>
            <p style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
              {witness.name}
            </p>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
              {t('witness.roleLabel')}: {witness.role}
            </p>
          </div>
        </div>

        {/* ── Testimony ── */}
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
            {t('witness.testimonyLabel')}
          </p>
          <div style={{
            padding: '18px 20px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderLeft: '3px solid var(--border-accent)',
            borderRadius: '0 12px 12px 0',
          }}>
            <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--text-secondary)', fontStyle: 'italic' }}>
              &ldquo;{witness.testimony}&rdquo;
            </p>
          </div>
        </div>

        <div style={{ height: '1px', background: 'var(--border)' }} />

        {/* ── Questioning approach ── */}
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
            {t('witness.chooseApproach')}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
          }}>
            {STYLE_BUTTONS.map((btn, i) => (
              <motion.button
                key={btn.style}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleStyle(btn.style)}
                onMouseEnter={() => setHovered(btn.style)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: '16px 14px',
                  background: hovered === btn.style ? btn.bgColor : 'var(--bg-surface)',
                  border: `1px solid ${hovered === btn.style ? btn.color + '50' : 'var(--border)'}`,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.15s ease, border-color 0.15s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {/* Icon */}
                <div style={{ color: btn.color }}>
                  {btn.icon}
                </div>
                {/* Label */}
                <div>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: btn.color, lineHeight: 1.2, marginBottom: '3px' }}>
                    {t(btn.labelKey)}
                  </p>
                  <p style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    {t(btn.descKey)}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

      </motion.div>
    </>
  )
}
