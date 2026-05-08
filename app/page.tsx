'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { Button } from '@/components/ui/Button'
import { ScalesIcon } from '@/components/ui/Icons'

// Case category tags with colors
const CASE_TAGS = [
  { color: '#FFB800', bg: 'rgba(255,184,0,0.1)',   border: 'rgba(255,184,0,0.25)',  key: 'Food Crimes' },
  { color: '#FF2D78', bg: 'rgba(255,45,120,0.1)',  border: 'rgba(255,45,120,0.25)', key: 'Pet Drama' },
  { color: '#00C8FF', bg: 'rgba(0,200,255,0.1)',   border: 'rgba(0,200,255,0.25)',  key: 'AI Accidents' },
  { color: '#FF6B35', bg: 'rgba(255,107,53,0.1)',  border: 'rgba(255,107,53,0.25)', key: 'Influencer Chaos' },
  { color: '#00E5A0', bg: 'rgba(0,229,160,0.1)',   border: 'rgba(0,229,160,0.25)',  key: 'Student Life' },
  { color: '#A78BFA', bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.25)',key: 'Space Nonsense' },
  { color: '#F59E0B', bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.25)', key: 'Office Chaos' },
  { color: '#EC4899', bg: 'rgba(236,72,153,0.1)',  border: 'rgba(236,72,153,0.25)', key: 'Internet Memes' },
]

// Feature highlights
const FEATURES = [
  { icon: '⚖️', key: 'feature1' },
  { icon: '🎭', key: 'feature2' },
  { icon: '�', key: 'feature3' },
]

export default function HomePage() {
  const router = useRouter()
  const { t, tArray, lang } = useTranslation()
  const examples = tArray('home.examples')

  return (
    <div className="game-panel">
      <div className="home-layout">

        {/* ══ LEFT / TOP — Hero ══ */}
        <motion.div
          className="home-hero"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 16 }}
            style={{
              width: '72px', height: '72px',
              borderRadius: '20px',
              background: 'rgba(255,45,120,0.1)',
              border: '1px solid rgba(255,45,120,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--accent-primary)',
              boxShadow: '0 0 32px rgba(255,45,120,0.2)',
            }}
          >
            <ScalesIcon size={36} />
          </motion.div>

          {/* Title */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: 'clamp(36px, 6vw, 60px)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '6px',
              }}
            >
              {t('home.title')}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: 'clamp(36px, 6vw, 60px)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--accent-primary)',
                textShadow: '0 0 32px rgba(255,45,120,0.4)',
              }}
            >
              {t('home.titleAccent')}
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: 'clamp(15px, 1.8vw, 19px)',
              color: 'var(--text-secondary)',
              fontWeight: 500,
              lineHeight: 1.55,
            }}
          >
            {t('home.subtitle')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              fontSize: 'clamp(13px, 1.4vw, 15px)',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
            }}
          >
            {t('home.description')}
          </motion.p>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
          >
            {(['badge1', 'badge2', 'badge3'] as const).map((key, i) => (
              <motion.span
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.06 }}
                style={{
                  fontSize: '11px', fontWeight: 600,
                  padding: '5px 12px',
                  borderRadius: '999px',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-surface)',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.02em',
                }}
              >
                {t(`home.${key}`)}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <Button onClick={() => router.push('/trial')} size="lg" fullWidth>
              {t('home.startButton')}
            </Button>

            {/* Step hint */}
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.5 }}>
              {lang === 'zh'
                ? '开庭陈词 → 选择证据 → 质问证人 → 最终辩护 → 判决'
                : 'Opening → Evidence → Witnesses → Defense → Verdict'}
            </p>
          </motion.div>
        </motion.div>

        {/* ══ RIGHT / BOTTOM — Case showcase ══ */}
        <motion.div
          className="home-examples"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          {/* Section header */}
          <div>
            <p style={{
              fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px',
            }}>
              {t('home.sampleCases')}
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {lang === 'zh' ? '每局案件由系统随机生成，内容完全不同' : 'Every trial is unique — cases are randomly selected'}
            </p>
          </div>

          {/* Case example cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {examples.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.06 }}
                style={{
                  padding: '14px 16px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{
                  width: '32px', height: '32px', borderRadius: '8px', flexShrink: 0,
                  background: `${CASE_TAGS[i % CASE_TAGS.length].bg}`,
                  border: `1px solid ${CASE_TAGS[i % CASE_TAGS.length].border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ 
                    fontSize: '14px', 
                    fontWeight: 700, 
                    color: CASE_TAGS[i % CASE_TAGS.length].color,
                    fontVariantNumeric: 'tabular-nums'
                  }}>
                    {i + 1}
                  </span>
                </div>
                <span style={{ fontSize: 'clamp(12px, 1.4vw, 14px)', color: 'var(--text-secondary)', lineHeight: 1.45, flex: 1 }}>
                  {text}
                </span>
                <span style={{
                  fontSize: '10px', fontWeight: 700, letterSpacing: '0.05em',
                  padding: '2px 8px', borderRadius: '999px', flexShrink: 0,
                  color: CASE_TAGS[i % CASE_TAGS.length].color,
                  background: CASE_TAGS[i % CASE_TAGS.length].bg,
                  border: `1px solid ${CASE_TAGS[i % CASE_TAGS.length].border}`,
                }}>
                  {t(`categories.${CASE_TAGS[i % CASE_TAGS.length].key}`)}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '8px',
              marginTop: '4px',
            }}
          >
            {[
              { num: '10+', label: lang === 'zh' ? '案件类型' : 'Case Types' },
              { num: '8',   label: lang === 'zh' ? '游戏阶段' : 'Game Phases' },
              { num: '5',   label: lang === 'zh' ? '评分维度' : 'Score Dims' },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: '14px 12px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '22px', fontWeight: 900, color: 'var(--accent-primary)', lineHeight: 1, marginBottom: '4px' }}>
                  {stat.num}
                </p>
                <p style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: 500, lineHeight: 1.3 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}
