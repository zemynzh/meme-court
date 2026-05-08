'use client'

import { motion } from 'framer-motion'
import { useTranslation, type Language } from '@/hooks/useTranslation'

const OPTIONS: { value: Language; label: string }[] = [
  { value: 'en', label: 'EN' },
  { value: 'zh', label: '中' },
]

// iOS-style segmented control
export function LanguageToggle() {
  const { lang, setLang } = useTranslation()

  return (
    <div
      role="group"
      aria-label="Language"
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        height: '31px',
        borderRadius: '999px',
        padding: '2px',
        gap: 0,
        backgroundColor: 'var(--seg-track)',
        boxShadow: 'var(--seg-track-shadow)',
      }}
    >
      {/* Sliding pill indicator */}
      <motion.span
        aria-hidden
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        style={{
          position: 'absolute',
          top: '2px',
          bottom: '2px',
          left: lang === 'en' ? '2px' : 'calc(50% + 1px)',
          width: 'calc(50% - 3px)',
          borderRadius: '999px',
          backgroundColor: 'var(--seg-thumb)',
          boxShadow: 'var(--seg-thumb-shadow)',
          pointerEvents: 'none',
        }}
      />

      {OPTIONS.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setLang(value)}
          aria-pressed={lang === value}
          aria-label={value === 'en' ? 'Switch to English' : '切换到中文'}
          style={{
            position: 'relative',
            zIndex: 1,
            width: '36px',
            height: '27px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            borderRadius: '999px',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.02em',
            transition: 'color 0.2s ease',
            color: lang === value ? 'var(--seg-active-text)' : 'var(--seg-inactive-text)',
            outline: 'none',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
