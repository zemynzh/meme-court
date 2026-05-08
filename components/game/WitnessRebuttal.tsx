'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { Button } from '@/components/ui/Button'
import { UserIcon, BotIcon } from '@/components/ui/Icons'
import type { Witness, RebuttalResult } from '@/lib/game-types'

interface WitnessRebuttalProps {
  witness: Witness
  witnessNumber: 1 | 2
  /** AI-generated result stored in GameContext. Null while loading. */
  rebuttalResult: RebuttalResult | null
  isLoading: boolean
  onContinue: (moodChange: number) => void
}

const REACTION_COLORS: Record<string, string> = {
  defensive: '#00C8FF',
  angry:     '#FF2D78',
  nervous:   '#FFB800',
  indignant: '#FF6B35',
  confused:  '#A78BFA',
}

export function WitnessRebuttal({
  witness,
  witnessNumber,
  rebuttalResult,
  isLoading,
  onContinue,
}: WitnessRebuttalProps) {
  const { t, lang } = useTranslation()

  const reactionColor = rebuttalResult
    ? (REACTION_COLORS[rebuttalResult.reaction] ?? '#00C8FF')
    : '#00C8FF'

  const handleContinue = () => {
    onContinue(rebuttalResult?.moodChange ?? 0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35 }}
      className="phase-inner"
    >
      {/* ── Header ── */}
      <div>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '6px' }}>
          {t('rebuttal.label')} — {t('witness.witnessLabel')} {witnessNumber}
        </p>
        <h2 style={{ fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.2 }}>
          {t('rebuttal.title')}
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: 1.5 }}>
          {t('rebuttal.subtitle')}
        </p>
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
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
            {witness.name}
          </p>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
            {witness.role}
          </p>
        </div>
        {/* Reaction badge — only shown when AI result is ready */}
        {rebuttalResult && (
          <span style={{
            fontSize: '11px', fontWeight: 700,
            padding: '3px 10px', borderRadius: '999px',
            color: reactionColor,
            border: `1px solid ${reactionColor}35`,
            background: `${reactionColor}12`,
            flexShrink: 0,
            textTransform: 'capitalize',
          }}>
            {rebuttalResult.reaction}
          </span>
        )}
      </div>

      {/* ── Rebuttal text ── */}
      <div>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
          {t('rebuttal.rebuttalLabel')}
        </p>
        <div style={{
          padding: '18px 20px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderLeft: `3px solid ${reactionColor}`,
          borderRadius: '0 12px 12px 0',
          minHeight: '80px',
          display: 'flex',
          alignItems: 'center',
        }}>
          {isLoading ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
              <div className="loading-spinner" />
              <span style={{ fontSize: '14px', fontStyle: 'italic' }}>
                {lang === 'zh' ? '证人正在思考反驳...' : 'Witness is thinking of a rebuttal...'}
              </span>
            </div>
          ) : (
            <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--text-secondary)', fontStyle: 'italic' }}>
              &ldquo;{rebuttalResult?.rebuttal ?? witness.rebuttal}&rdquo;
            </p>
          )}
        </div>
      </div>

      {/* ── AI indicator ── */}
      {rebuttalResult && (
        <div style={{
          padding: '8px 12px',
          background: 'rgba(0,200,255,0.05)',
          border: '1px solid rgba(0,200,255,0.12)',
          borderRadius: '8px',
          fontSize: '11px',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <BotIcon size={13} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
          <span>{lang === 'zh' ? 'AI 生成的反驳' : 'AI-generated rebuttal'}</span>
          {rebuttalResult.moodChange !== 0 && (
            <span style={{
              color: rebuttalResult.moodChange > 0 ? 'var(--accent-success)' : 'var(--accent-warning)',
              fontWeight: 600,
            }}>
              ({rebuttalResult.moodChange > 0 ? '+' : ''}{rebuttalResult.moodChange} {lang === 'zh' ? '情绪' : 'mood'})
            </span>
          )}
        </div>
      )}

      {/* ── Mood note ── */}
      <div style={{
        padding: '12px 16px',
        background: 'rgba(255,45,120,0.05)',
        border: '1px solid rgba(255,45,120,0.12)',
        borderRadius: '10px',
        fontSize: '12px',
        color: 'var(--text-muted)',
        lineHeight: 1.5,
      }}>
        {t('rebuttal.moodNote')}
      </div>

      {/* ── CTA ── */}
      <div style={{ marginTop: 'auto' }}>
        <Button onClick={handleContinue} size="lg" fullWidth disabled={isLoading}>
          {t('rebuttal.continueButton')}
        </Button>
      </div>
    </motion.div>
  )
}
