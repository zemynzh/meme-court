'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { Button } from '@/components/ui/Button'
import type { GameCase } from '@/lib/game-types'

interface CaseCardProps {
  gameCase: GameCase
  caseNumber: number
  onStartDefense: () => void
}

const CATEGORY_COLORS: Record<string, string> = {
  'Food Crimes':            '#FFB800',
  'Pet Drama':              '#FF2D78',
  'AI Accidents':           '#00C8FF',
  'Influencer Chaos':       '#FF6B35',
  'Student Life':           '#00E5A0',
  'Space Nonsense':         '#A78BFA',
  'Office Chaos':           '#F59E0B',
  'Internet Meme Disputes': '#EC4899',
}

function useTypewriter(text: string, speed = 18) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    setDisplayed('')
    if (!text) return
    let i = 0
    const timer = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) clearInterval(timer)
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed])
  return displayed
}

export function CaseCard({ gameCase, caseNumber, onStartDefense }: CaseCardProps) {
  const { t } = useTranslation()
  const displayedSummary = useTypewriter(gameCase.summary)
  const categoryColor = CATEGORY_COLORS[gameCase.category] ?? 'var(--accent-primary)'
  const done = displayedSummary.length >= gameCase.summary.length

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="phase-inner"
    >
      {/* ── Top meta row ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '12px', fontFamily: 'monospace', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
          {t('case.caseNumber')}{String(caseNumber).padStart(3, '0')}
        </span>
        <span style={{
          fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em',
          padding: '3px 10px', borderRadius: '999px',
          color: categoryColor,
          border: `1px solid ${categoryColor}35`,
          background: `${categoryColor}12`,
        }}>
          {t(`categories.${gameCase.category}`)}
        </span>
      </div>

      {/* ── Title block ── */}
      <div style={{ paddingBottom: '4px' }}>
        <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '0.04em' }}>
          {t('case.todaysCase')}
        </p>
        <h1 style={{
          fontSize: 'clamp(26px, 5vw, 40px)',
          fontWeight: 900,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
        }}>
          {gameCase.title}
        </h1>
      </div>

      {/* ── Divider ── */}
      <div style={{ height: '1px', background: 'var(--border)' }} />

      {/* ── Field rows — document style ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        <FieldRow label={t('case.defendant')} value={gameCase.defendant} />
        <FieldRow label={t('case.charge')} value={gameCase.charge} valueColor="var(--accent-primary)" />
      </div>

      {/* ── Divider ── */}
      <div style={{ height: '1px', background: 'var(--border)' }} />

      {/* ── Summary ── */}
      <div>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
          {t('case.summary')}
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
          {displayedSummary}
          {!done && <span className="cursor-blink" />}
        </p>
      </div>

      {/* ── Atmosphere tag ── */}
      {done && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            {t('case.atmosphere')}
          </span>
          <span style={{
            fontSize: '12px', fontWeight: 600,
            color: 'var(--accent-secondary)',
            padding: '2px 8px',
            borderRadius: '6px',
            background: 'rgba(0,200,255,0.08)',
            border: '1px solid rgba(0,200,255,0.15)',
          }}>
            {gameCase.atmosphere}
          </span>
        </motion.div>
      )}

      {/* ── CTA ── */}
      <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
        <Button onClick={onStartDefense} size="lg" fullWidth disabled={!done}>
          {t('case.startDefense')}
        </Button>
      </div>
    </motion.div>
  )
}

/* Document-style field row — label above, value below, separated by thin line */
function FieldRow({ label, value, valueColor }: { label: string; value: string; valueColor?: string }) {
  return (
    <div style={{
      padding: '14px 0',
      borderBottom: '1px solid var(--border)',
      display: 'grid',
      gridTemplateColumns: '90px 1fr',
      gap: '12px',
      alignItems: 'baseline',
    }}>
      <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.04em', paddingTop: '2px' }}>
        {label}
      </span>
      <span style={{ fontSize: '15px', fontWeight: 600, color: valueColor ?? 'var(--text-primary)', lineHeight: 1.4 }}>
        {value}
      </span>
    </div>
  )
}
