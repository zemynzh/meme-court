'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { MoodMeter } from '@/components/ui/MoodMeter'
import { Button } from '@/components/ui/Button'
import type { Evidence, JudgeMood } from '@/lib/game-types'

interface DefenseInputProps {
  selectedEvidences: Evidence[]
  witnessTestimony: string
  mood: JudgeMood
  onSubmit: (argument: string) => void
  isLoading: boolean
}

const MAX_CHARS = 300

/**
 * Hook: tracks whether the soft keyboard is open on mobile.
 * Uses visualViewport API — when keyboard opens, viewport height shrinks.
 */
function useKeyboardOpen() {
  const [keyboardOpen, setKeyboardOpen] = useState(false)

  useEffect(() => {
    const vv = window.visualViewport
    if (!vv) return

    const handler = () => {
      // If viewport height is significantly less than window height, keyboard is open
      const ratio = vv.height / window.innerHeight
      setKeyboardOpen(ratio < 0.75)
    }

    vv.addEventListener('resize', handler)
    return () => vv.removeEventListener('resize', handler)
  }, [])

  return keyboardOpen
}

export function DefenseInput({ selectedEvidences, witnessTestimony, mood, onSubmit, isLoading }: DefenseInputProps) {
  const { t } = useTranslation()
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const keyboardOpen = useKeyboardOpen()

  const presets = [
    t('defense.presets.0'),
    t('defense.presets.1'),
    t('defense.presets.2'),
  ]

  const moodLabels: Record<JudgeMood, string> = {
    annoyed:   t('witness.moods.annoyed'),
    confused:  t('witness.moods.confused'),
    amused:    t('witness.moods.amused'),
    impressed: t('witness.moods.impressed'),
    convinced: t('witness.moods.convinced'),
  }

  const handlePreset = (preset: string) => {
    setText(preset.slice(0, MAX_CHARS))
    // Focus textarea after selecting preset
    setTimeout(() => textareaRef.current?.focus(), 50)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="phase-inner"
    >
      {/* ── Header — hidden when keyboard is open to save space ── */}
      {!keyboardOpen && (
        <>
          <div>
            <h2 style={{ fontSize: 'clamp(20px, 5vw, 28px)', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1.2 }}>
              {t('defense.title')}
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: 1.5 }}>
              {t('defense.subtitle')}
            </p>
          </div>

          {/* ── Mood meter ── */}
          <div style={{ padding: '10px 14px', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: '10px' }}>
            <MoodMeter mood={mood} label={t('witness.moodLabel')} moodLabels={moodLabels} />
          </div>

          <div style={{ height: '1px', background: 'var(--border)' }} />

          {/* ── Evidence summary ── */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
              {t('defense.evidenceLabel')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {selectedEvidences.map((ev, i) => (
                <div key={ev.id} style={{
                  padding: '12px 0',
                  borderBottom: i < selectedEvidences.length - 1 ? '1px solid var(--border)' : 'none',
                  display: 'grid',
                  gridTemplateColumns: '20px 1fr',
                  gap: '10px',
                  alignItems: 'center',
                }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textAlign: 'center' }}>
                    {i + 1}
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--accent-warning)', lineHeight: 1.3 }}>
                    {ev.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ height: '1px', background: 'var(--border)' }} />

          {/* ── Witness testimony excerpt ── */}
          {witnessTestimony && (
            <div>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
                {t('defense.testimonyLabel')}
              </p>
              <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                &ldquo;{witnessTestimony.slice(0, 140)}{witnessTestimony.length > 140 ? '…' : ''}&rdquo;
              </p>
            </div>
          )}

          {/* ── Preset starters ── */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
              {t('defense.presetsLabel')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {presets.map((preset, i) => (
                <motion.button
                  key={i}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePreset(preset)}
                  style={{
                    textAlign: 'left',
                    fontSize: '12px',
                    lineHeight: 1.5,
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: '1px solid var(--border)',
                    background: 'var(--bg-surface)',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'border-color 0.15s ease, background 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-accent)'
                    e.currentTarget.style.background = 'var(--bg-surface-hover)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.background = 'var(--bg-surface)'
                  }}
                >
                  {preset}
                </motion.button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ── When keyboard is open: show compact header ── */}
      {keyboardOpen && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '4px' }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>
              {t('defense.title')}
            </p>
          </div>
          <span style={{ fontSize: '11px', color: text.length >= MAX_CHARS * 0.9 ? 'var(--accent-primary)' : 'var(--text-muted)' }}>
            {text.length}/{MAX_CHARS}
          </span>
        </div>
      )}

      {/* ── Submit button ABOVE textarea — always visible even when keyboard is open ── */}
      <Button
        onClick={() => onSubmit(text)}
        size="lg"
        fullWidth
        disabled={text.trim().length === 0}
        loading={isLoading}
      >
        {t('defense.submitButton')}
      </Button>

      {/* ── Text input ── */}
      <div>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, MAX_CHARS))}
          placeholder={t('defense.inputPlaceholder')}
          rows={keyboardOpen ? 4 : 5}
          style={{
            width: '100%',
            borderRadius: '12px',
            padding: '16px',
            fontSize: '14px',
            lineHeight: 1.65,
            resize: 'none',
            outline: 'none',
            background: 'var(--bg-surface)',
            border: `1px solid ${text.length > 0 ? 'var(--accent-primary)' : 'var(--border)'}`,
            color: 'var(--text-primary)',
            boxShadow: text.length > 0 ? 'var(--glow-primary)' : 'none',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}
        />
        {!keyboardOpen && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '6px' }}>
            <span style={{ fontSize: '11px', color: text.length >= MAX_CHARS * 0.9 ? 'var(--accent-primary)' : 'var(--text-muted)' }}>
              {text.length}/{MAX_CHARS} {t('defense.charCount')}
            </span>
          </div>
        )}
      </div>

    </motion.div>
  )
}
