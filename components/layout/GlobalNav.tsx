'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LanguageToggle } from '@/components/layout/LanguageToggle'
import { ScalesIcon } from '@/components/ui/Icons'
import { useTranslation } from '@/hooks/useTranslation'

// Refresh / new trial icon
function RefreshIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M21 3v5h-5"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M3 21v-5h5"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

export function GlobalNav() {
  const pathname = usePathname()
  const { t } = useTranslation()
  const isTrialPage = pathname === '/trial'

  const handleNewTrial = () => {
    // Hard reload to get a fresh case in the current language
    window.location.reload()
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="global-nav"
    >
      <div className="global-nav-inner">

        {/* Left — Logo */}
        <a href="/" className="nav-logo" aria-label="Meme Court home">
          <ScalesIcon size={22} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
          <span className="nav-logo-text">
            MEME COURT<span className="nav-logo-accent nav-logo-accent-full"> OBJECTION!</span>
          </span>
        </a>

        {/* Right — controls */}
        <div className="nav-controls">

          {/* New Trial button — only on /trial */}
          {isTrialPage && (
            <motion.button
              onClick={handleNewTrial}
              whileTap={{ scale: 0.94 }}
              title={t('nav.newTrial')}
              aria-label={t('nav.newTrial')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                height: '31px',
                padding: '0 12px',
                borderRadius: '999px',
                border: '1px solid var(--border)',
                background: 'var(--bg-surface)',
                color: 'var(--text-secondary)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'color 0.15s ease, border-color 0.15s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.color = 'var(--accent-primary)'
                el.style.borderColor = 'var(--border-accent)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.color = 'var(--text-secondary)'
                el.style.borderColor = 'var(--border)'
              }}
            >
              <RefreshIcon />
              <span className="nav-new-trial-label">{t('nav.newTrial')}</span>
            </motion.button>
          )}

          <LanguageToggle />
          <ThemeToggle />
        </div>

      </div>
    </motion.nav>
  )
}
