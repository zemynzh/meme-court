'use client'

import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LanguageToggle } from '@/components/layout/LanguageToggle'

export function Header() {
  return (
    <header className="game-header">
      <div className="flex items-center gap-2">
        <span className="text-lg">⚖️</span>
        <span
          className="text-sm font-bold tracking-wide"
          style={{ color: 'var(--accent-primary)' }}
        >
          MEME COURT
        </span>
      </div>

      <div className="flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}
