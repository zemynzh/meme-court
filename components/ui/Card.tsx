'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  selected?: boolean
  onClick?: () => void
  className?: string
  hoverable?: boolean
  elevated?: boolean
}

export function Card({
  children,
  selected = false,
  onClick,
  className = '',
  hoverable = false,
  elevated = false,
}: CardProps) {
  const base = [
    'card-base',
    'p-4',
    selected ? 'card-selected' : '',
    hoverable && !selected ? 'hover:bg-[var(--bg-surface-hover)] hover:border-[var(--border-accent)] cursor-pointer' : '',
    elevated ? 'shadow-[var(--shadow-elevated)]' : '',
    onClick ? 'cursor-pointer' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (onClick) {
    return (
      <motion.div
        className={base}
        onClick={onClick}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.div>
    )
  }

  return <div className={base}>{children}</div>
}
