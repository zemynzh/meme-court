'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { MoodMeter } from '@/components/ui/MoodMeter'
import type { GameSession, GamePhase, Verdict, JudgeMood } from '@/lib/game-types'

interface TrialSidebarProps {
  session: GameSession
  phase: GamePhase
  verdict: Verdict | null
}

const PHASES: GamePhase[] = [
  'opening',
  'case_reveal',
  'evidence',
  'witness_1',
  'witness_1_rebuttal',
  'witness_2',
  'witness_2_rebuttal',
  'judge_question',
  'defense',
  'verdict',
]

const RANK_COLORS: Record<string, string> = {
  S: '#FFB800', A: '#00E5A0', B: '#00C8FF', C: '#FF6B35', D: '#FF4444',
}

/* ── Thin section label ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em',
      textTransform: 'uppercase', color: 'var(--text-muted)',
      marginBottom: '12px',
    }}>
      {children}
    </p>
  )
}

/* ── Sidebar section wrapper ── */
function Section({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      padding: '18px 20px',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      ...style,
    }}>
      {children}
    </div>
  )
}

export function TrialSidebar({ session, phase, verdict }: TrialSidebarProps) {
  const { t } = useTranslation()

  const moodLabels: Record<JudgeMood, string> = {
    annoyed:   t('witness.moods.annoyed'),
    confused:  t('witness.moods.confused'),
    amused:    t('witness.moods.amused'),
    impressed: t('witness.moods.impressed'),
    convinced: t('witness.moods.convinced'),
  }

  const currentIndex = PHASES.indexOf(phase as GamePhase)
  const showMood = phase === 'witness_1' || phase === 'witness_1_rebuttal' || phase === 'witness_2' || phase === 'witness_2_rebuttal' || phase === 'judge_question' || phase === 'defense' || phase === 'verdict'
  const showCase = !!session.case && phase !== 'loading_case' && phase !== 'idle'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

      {/* ── Progress — left-bar nav style ── */}
      <Section>
        <SectionLabel>{t('sidebar.progress')}</SectionLabel>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {PHASES.map((p, i) => {
            const isActive = p === phase
            const isDone = i < currentIndex
            const label = t(`sidebar.phases.${p}`)

            return (
              <motion.div
                key={p}
                animate={{ opacity: isDone || isActive ? 1 : 0.45 }}
                transition={{ duration: 0.25 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '8px 10px',
                  borderRadius: '8px',
                  position: 'relative',
                  background: isActive ? 'var(--bg-surface-hover)' : 'transparent',
                  cursor: 'default',
                }}
              >
                {/* Left accent bar */}
                <motion.div
                  animate={{
                    background: isActive
                      ? 'var(--accent-primary)'
                      : isDone
                        ? 'var(--accent-success)'
                        : 'rgba(0,0,0,0)',
                    opacity: isActive || isDone ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '6px',
                    bottom: '6px',
                    width: '3px',
                    borderRadius: '2px',
                  }}
                />

                {/* Step number or check */}
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  fontVariantNumeric: 'tabular-nums',
                  color: isActive
                    ? 'var(--accent-primary)'
                    : isDone
                      ? 'var(--accent-success)'
                      : 'var(--text-muted)',
                  width: '16px',
                  textAlign: 'center',
                  flexShrink: 0,
                  transition: 'color 0.25s ease',
                }}>
                  {isDone ? '✓' : `${i + 1}`}
                </span>

                {/* Label */}
                <span style={{
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive
                    ? 'var(--text-primary)'
                    : isDone
                      ? 'var(--text-secondary)'
                      : 'var(--text-muted)',
                  transition: 'color 0.25s ease',
                  lineHeight: 1.3,
                }}>
                  {label}
                </span>
              </motion.div>
            )
          })}
        </nav>
      </Section>

      {/* ── Judge Mood ── */}
      <AnimatePresence>
        {showMood && (
          <motion.div
            key="mood"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
          >
            <Section>
              <MoodMeter
                mood={session.currentMood}
                label={t('witness.moodLabel')}
                moodLabels={moodLabels}
              />
            </Section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Case Info ── */}
      <AnimatePresence>
        {showCase && (
          <motion.div
            key="case"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
          >
            <Section>
              <SectionLabel>{t('sidebar.currentCase')}</SectionLabel>

              <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: '8px' }}>
                {session.case!.title}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', width: '44px', flexShrink: 0, paddingTop: '1px' }}>
                    {t('sidebar.defendant')}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    {session.case!.defendant}
                  </span>
                </div>
              </div>

              <AnimatePresence>
                {session.selectedEvidences && session.selectedEvidences.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                    style={{ paddingTop: '12px', borderTop: '1px solid var(--border)' }}
                  >
                    <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                      {t('sidebar.evidence')}
                    </span>
                    {session.selectedEvidences.map((ev) => (
                      <span key={ev.id} style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-warning)', display: 'block', lineHeight: 1.5 }}>
                        {ev.name}
                      </span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </Section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Verdict Score ── */}
      <AnimatePresence>
        {verdict && phase === 'verdict' && (
          <motion.div
            key="verdict-score"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, type: 'spring', stiffness: 220, damping: 20 }}
          >
            <Section style={{ borderColor: 'var(--accent-primary)', boxShadow: 'var(--glow-primary)' }}>
              <SectionLabel>{t('sidebar.finalScore')}</SectionLabel>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                <span style={{ fontSize: '48px', fontWeight: 900, color: 'var(--accent-primary)', lineHeight: 1, letterSpacing: '-0.02em' }}>
                  {verdict.totalScore}
                </span>
                <span style={{ fontSize: '16px', color: 'var(--text-muted)', fontWeight: 400 }}>/100</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  fontSize: '22px', fontWeight: 900,
                  color: RANK_COLORS[verdict.rank] ?? 'var(--accent-primary)',
                }}>
                  {verdict.rank}
                </span>
                <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)' }}>
                  {verdict.rankTitle}
                </span>
              </div>
            </Section>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
