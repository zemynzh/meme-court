'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'warning'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: Variant
  size?: Size
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  className?: string
  type?: 'button' | 'submit'
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-[var(--accent-primary)] text-white border border-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] shadow-[var(--glow-primary)]',
  secondary:
    'bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--accent-primary)]',
  ghost:
    'bg-transparent text-[var(--text-secondary)] border border-transparent hover:text-[var(--text-primary)] hover:border-[var(--border)]',
  danger:
    'bg-[#FF3B3B] text-white border border-[#FF3B3B] hover:bg-[#FF5555]',
  warning:
    'bg-[var(--accent-warning)] text-black border border-[var(--accent-warning)] hover:opacity-90',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-xl min-h-[36px]',
  md: 'px-6 py-3 text-base rounded-2xl min-h-[44px]',
  lg: 'px-8 py-4 text-lg rounded-2xl min-h-[52px] font-semibold',
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      whileHover={{ scale: disabled ? 1 : 1.01 }}
      transition={{ duration: 0.1 }}
      className={[
        'inline-flex items-center justify-center gap-2',
        'font-medium cursor-pointer select-none',
        'transition-all duration-200',
        'disabled:opacity-40 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {loading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : null}
      {children}
    </motion.button>
  )
}
