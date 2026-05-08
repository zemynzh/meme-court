'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { SunIcon, MoonIcon } from '@/components/ui/Icons'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-checked={isDark}
      role="switch"
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        width: '51px',
        height: '31px',
        borderRadius: '999px',
        border: 'none',
        cursor: 'pointer',
        padding: '2px',
        flexShrink: 0,
        outline: 'none',
        transition: 'background-color 0.25s ease',
        backgroundColor: isDark ? '#1C1C1E' : '#E5E5EA',
        boxShadow: isDark
          ? 'inset 0 0 0 1px rgba(255,255,255,0.08)'
          : 'inset 0 1px 3px rgba(0,0,0,0.12)',
      }}
    >
      {/* Sliding thumb */}
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        style={{
          position: 'absolute',
          left: isDark ? 'calc(100% - 27px - 2px)' : '2px',
          width: '27px',
          height: '27px',
          borderRadius: '999px',
          backgroundColor: isDark ? '#48484A' : '#FFFFFF',
          boxShadow: isDark
            ? '0 1px 4px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.06)'
            : '0 1px 4px rgba(0,0,0,0.18), 0 0 0 0.5px rgba(0,0,0,0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: isDark ? '#FFB800' : '#FF9500',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={theme}
            initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {isDark ? <MoonIcon size={13} /> : <SunIcon size={14} />}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </button>
  )
}
