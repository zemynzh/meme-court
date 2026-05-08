'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { Button } from '@/components/ui/Button'
import { GavelIcon } from '@/components/ui/Icons'

interface OpeningStatementProps {
  statement: string
  caseTitle: string
  onContinue: () => void
}

function useTypewriter(text: string, speed = 22) {
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

export function OpeningStatement({ statement, caseTitle, onContinue }: OpeningStatementProps) {
  const { t } = useTranslation()
  const displayed = useTypewriter(statement)
  const done = displayed.length >= statement.length

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="phase-inner"
    >
      {/* Judge header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
      >
        <div style={{
          width: '44px', height: '44px', borderRadius: '12px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--accent-primary)',
          flexShrink: 0,
        }}>
          <GavelIcon size={22} />
        </div>
        <div>
          <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            {t('opening.judgeLabel')}
          </p>
          <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)' }}>
            {t('opening.courtInSession')}
          </p>
        </div>
      </motion.div>

      {/* Case title */}
      <div style={{ height: '1px', background: 'var(--border)' }} />
      <div>
        <p style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '6px', letterSpacing: '0.04em' }}>
          {t('opening.caseLabel')}
        </p>
        <h2 style={{
          fontSize: 'clamp(20px, 4vw, 30px)',
          fontWeight: 900,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
        }}>
          {caseTitle}
        </h2>
      </div>

      <div style={{ height: '1px', background: 'var(--border)' }} />

      {/* Opening statement */}
      <div>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
          {t('opening.statementLabel')}
        </p>
        <div style={{
          padding: '20px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderLeft: '3px solid var(--accent-primary)',
          borderRadius: '0 12px 12px 0',
        }}>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            &ldquo;{displayed}
            {!done && <span className="cursor-blink" />}
            {done && '\u201D'}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
        <Button onClick={onContinue} size="lg" fullWidth disabled={!done}>
          {t('opening.continueButton')}
        </Button>
      </div>
    </motion.div>
  )
}
