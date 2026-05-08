'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { Button } from '@/components/ui/Button'
import type { Evidence, EvidenceTag } from '@/lib/game-types'

interface EvidencePhaseProps {
  evidenceCards: Evidence[]
  selectedEvidences: Evidence[]
  onToggle: (evidence: Evidence) => void
  onConfirm: () => void
}

const TAG_CLASS: Record<EvidenceTag, string> = {
  Weird:        'tag-weird',
  Suspicious:   'tag-suspicious',
  Useful:       'tag-useful',
  Chaotic:      'tag-chaotic',
  Damning:      'tag-damning',
  Questionable: 'tag-questionable',
}

const CREDIBILITY_COLOR = (n: number) =>
  n >= 8 ? 'var(--accent-primary)' : n >= 5 ? 'var(--accent-warning)' : 'var(--text-muted)'

export function EvidencePhase({ evidenceCards, selectedEvidences, onToggle, onConfirm }: EvidencePhaseProps) {
  const { t } = useTranslation()
  const selectedCount = selectedEvidences.length
  const canConfirm = selectedCount === 2

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="phase-inner"
    >
      {/* ── Header ── */}
      <div>
        <h2 style={{ fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.2 }}>
          {t('evidence.title')}
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: 1.5 }}>
          {t('evidence.subtitle')}
        </p>
      </div>

      {/* ── Selection tracker ── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '10px 14px',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        borderRadius: '10px',
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              animate={{
                background: i < selectedCount ? 'var(--accent-primary)' : 'rgba(0,0,0,0)',
                borderColor: i < selectedCount ? 'var(--accent-primary)' : 'var(--border)',
              }}
              transition={{ duration: 0.2 }}
              style={{
                width: '24px', height: '24px', borderRadius: '50%',
                border: '2px solid',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '10px', fontWeight: 700,
                color: i < selectedCount ? '#fff' : 'var(--text-muted)',
              }}
            >
              {i < selectedCount ? '✓' : i + 1}
            </motion.div>
          ))}
        </div>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', flex: 1 }}>
          {selectedCount === 0 && t('evidence.selectHint')}
          {selectedCount === 1 && t('evidence.selectOne')}
          {selectedCount === 2 && t('evidence.selectDone')}
        </span>
      </div>

      {/* ── Evidence grid — 2 cols on tablet+, 1 col on mobile ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '12px',
      }}>
        {evidenceCards.map((ev, i) => {
          const isSelected = selectedEvidences.some((e) => e.id === ev.id)
          return (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.28 }}
            >
              <EvidenceCardItem
                evidence={ev}
                selected={isSelected}
                onToggle={() => onToggle(ev)}
                tagLabel={t(`evidence.tags.${ev.tag}`)}
              />
            </motion.div>
          )
        })}
      </div>

      {/* ── CTA ── */}
      <div style={{ marginTop: 'auto', paddingTop: '4px' }}>
        <Button onClick={onConfirm} size="lg" fullWidth disabled={!canConfirm}>
          {canConfirm ? t('evidence.confirmButton') : t('evidence.confirmDisabled')}
        </Button>
      </div>
    </motion.div>
  )
}

function EvidenceCardItem({
  evidence, selected, onToggle, tagLabel,
}: {
  evidence: Evidence
  selected: boolean
  onToggle: () => void
  tagLabel: string
}) {
  return (
    <motion.div
      onClick={onToggle}
      whileTap={{ scale: 0.98 }}
      style={{
        position: 'relative',
        padding: '18px 20px',
        background: selected ? 'var(--bg-surface-selected)' : 'var(--bg-surface)',
        border: `1px solid ${selected ? 'var(--border-selected)' : 'var(--border)'}`,
        borderRadius: '14px',
        cursor: 'pointer',
        userSelect: 'none',
        boxShadow: selected ? 'var(--glow-primary)' : 'var(--shadow-card)',
        transition: 'border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {/* Selected indicator */}
      {selected && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{
            position: 'absolute', top: '12px', right: '12px',
            width: '22px', height: '22px', borderRadius: '50%',
            background: 'var(--accent-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '11px', color: '#fff', fontWeight: 700,
            flexShrink: 0,
          }}
        >
          ✓
        </motion.div>
      )}

      {/* Tag row */}
      <div>
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${TAG_CLASS[evidence.tag]}`}
        >
          {tagLabel}
        </span>
      </div>

      {/* Name */}
      <h3 style={{
        fontSize: '14px', fontWeight: 700,
        color: 'var(--text-primary)',
        lineHeight: 1.35,
        paddingRight: selected ? '28px' : '0',
      }}>
        {evidence.name}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: '12px', lineHeight: 1.65,
        color: 'var(--text-secondary)',
        flex: 1,
      }}>
        {evidence.description}
      </p>

      {/* Credibility bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '4px', borderTop: '1px solid var(--border)' }}>
        <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase', flexShrink: 0 }}>
          Cred.
        </span>
        <div style={{ flex: 1, height: '3px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${evidence.credibility * 10}%` }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            style={{ height: '100%', borderRadius: '2px', background: CREDIBILITY_COLOR(evidence.credibility) }}
          />
        </div>
        <span style={{ fontSize: '10px', fontWeight: 700, color: CREDIBILITY_COLOR(evidence.credibility), width: '24px', textAlign: 'right', flexShrink: 0 }}>
          {evidence.credibility}/10
        </span>
      </div>
    </motion.div>
  )
}
