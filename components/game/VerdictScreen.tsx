'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Button } from '@/components/ui/Button'
import { ScalesIcon } from '@/components/ui/Icons'
import type { Verdict, VerdictRank } from '@/lib/game-types'

interface VerdictScreenProps {
  verdict: Verdict
  caseTitle: string
  onPlayAgain: () => void
  onShare: () => void
}

const RANK_COLORS: Record<VerdictRank, string> = {
  S: '#FFB800',
  A: '#00E5A0',
  B: '#00C8FF',
  C: '#FF6B35',
  D: '#FF4444',
}

const RANK_LABELS: Record<VerdictRank, string> = {
  S: 'LEGENDARY',
  A: 'EXCELLENT',
  B: 'SOLID',
  C: 'CLOWN',
  D: 'GUILTY',
}

const SCORE_COLORS = ['#FF2D78', '#FFB800', '#00C8FF', '#00E5A0']

export function VerdictScreen({ verdict, caseTitle, onPlayAgain, onShare }: VerdictScreenProps) {
  const { t } = useTranslation()
  const rankColor = RANK_COLORS[verdict.rank]
  const rankLabel = RANK_LABELS[verdict.rank]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="phase-inner"
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
      >
        <div style={{
          width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
          background: 'rgba(255,45,120,0.08)',
          border: '1px solid rgba(255,45,120,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--accent-primary)',
        }}>
          <ScalesIcon size={22} />
        </div>
        <div>
          <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            {t('verdict.subtitle')}
          </p>
          <h2 style={{ fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.2 }}>
            {t('verdict.title')}
          </h2>
        </div>
      </motion.div>

      <div style={{ height: '1px', background: 'var(--border)' }} />

      {/* ── Verdict result ── */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.25, type: 'spring', stiffness: 200 }}
        style={{
          padding: '20px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--accent-primary)',
          borderLeft: '4px solid var(--accent-primary)',
          borderRadius: '0 14px 14px 0',
          boxShadow: 'var(--glow-primary)',
        }}
      >
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
          {t('verdict.title')}
        </p>
        <p style={{ fontSize: 'clamp(14px, 3vw, 18px)', fontWeight: 900, lineHeight: 1.35, color: 'var(--accent-primary)', letterSpacing: '0.02em' }}>
          {verdict.result}
        </p>
      </motion.div>

      {/* ── Scores ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={{
          padding: '20px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: '14px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        <ProgressBar value={verdict.scores.logic}    label={t('verdict.scores.logic')}    color={SCORE_COLORS[0]} delay={0.5} />
        <ProgressBar value={verdict.scores.humor}    label={t('verdict.scores.humor')}    color={SCORE_COLORS[1]} delay={0.7} />
        <ProgressBar value={verdict.scores.evidence} label={t('verdict.scores.evidence')} color={SCORE_COLORS[2]} delay={0.9} />
        <ProgressBar value={verdict.scores.drama}    label={t('verdict.scores.drama')}    color={SCORE_COLORS[3]} delay={1.1} />

        <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
            {t('verdict.totalScore')}
          </span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            style={{ fontSize: '28px', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1 }}
          >
            {verdict.totalScore}
            <span style={{ fontSize: '14px', fontWeight: 400, color: 'var(--text-muted)' }}>/100</span>
          </motion.span>
        </div>
      </motion.div>

      {/* ── Rank — dramatic reveal with pulsing halo ── */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: 'spring', stiffness: 260, damping: 16 }}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {/* Animated halo rings behind the rank letter */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: [0.4, 2.2 + i * 0.5], opacity: [0.6, 0] }}
            transition={{
              delay: 1.5 + i * 0.15,
              duration: 1.0,
              ease: 'easeOut',
              repeat: 0,
            }}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '14px',
              background: `radial-gradient(circle at 30% 50%, ${rankColor}30, transparent 70%)`,
              pointerEvents: 'none',
            }}
          />
        ))}

        <div style={{
          padding: '24px',
          background: `${rankColor}0D`,
          border: `1px solid ${rankColor}40`,
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          position: 'relative',
        }}>
          {/* Big rank letter with layered glow */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            {/* Outer glow layer */}
            <motion.div
              animate={{
                boxShadow: [
                  `0 0 20px ${rankColor}40`,
                  `0 0 50px ${rankColor}70`,
                  `0 0 20px ${rankColor}40`,
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
              style={{
                width: '80px', height: '80px',
                borderRadius: '20px',
                background: `${rankColor}18`,
                border: `2px solid ${rankColor}60`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <motion.span
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.45, type: 'spring', stiffness: 300, damping: 14 }}
                style={{
                  fontSize: '52px',
                  fontWeight: 900,
                  lineHeight: 1,
                  color: rankColor,
                  textShadow: `0 0 30px ${rankColor}, 0 0 60px ${rankColor}80`,
                  letterSpacing: '-0.03em',
                  display: 'block',
                }}
              >
                {verdict.rank}
              </motion.span>
            </motion.div>
          </div>

          {/* Rank info */}
          <div style={{ flex: 1 }}>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6 }}
              style={{
                fontSize: '10px', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: rankColor, opacity: 0.7,
                marginBottom: '4px',
              }}
            >
              {rankLabel}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7 }}
              style={{
                fontSize: 'clamp(16px, 3vw, 20px)',
                fontWeight: 900,
                color: rankColor,
                lineHeight: 1.2,
                textShadow: `0 0 16px ${rankColor}50`,
              }}
            >
              {verdict.rankTitle}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* ── Judge comment ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9 }}
      >
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
          {t('verdict.judgeComment')}
        </p>
        <div style={{
          padding: '18px 20px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderLeft: '3px solid var(--border-accent)',
          borderRadius: '0 12px 12px 0',
        }}>
          <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            &ldquo;{verdict.judgeComment}&rdquo;
          </p>
        </div>
      </motion.div>

      {/* ── Actions ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
        className="verdict-actions"
      >
        <Button onClick={onShare} variant="secondary" size="lg" fullWidth>
          {t('verdict.shareResult')}
        </Button>
        <Button onClick={onPlayAgain} size="lg" fullWidth>
          {t('verdict.playAgain')}
        </Button>
      </motion.div>
    </motion.div>
  )
}
