'use client'

import { motion } from 'framer-motion'

interface ProgressBarProps {
  value: number      // 0–10
  label: string
  color?: string
  delay?: number
}

const defaultColors = [
  '#FF2D78', // logic — pink
  '#FFB800', // humor — amber
  '#00C8FF', // evidence — blue
  '#00E5A0', // drama — green
]

export function ProgressBar({ value, label, color, delay = 0 }: ProgressBarProps) {
  const percentage = (value / 10) * 100

  return (
    <div className="flex items-center gap-3">
      <span
        className="text-sm font-medium w-20 shrink-0"
        style={{ color: 'var(--text-secondary)' }}
      >
        {label}
      </span>
      <div
        className="flex-1 h-2 rounded-full overflow-hidden"
        style={{ background: 'var(--border)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: color ?? defaultColors[0] }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        />
      </div>
      <span
        className="text-sm font-bold w-8 text-right shrink-0"
        style={{ color: 'var(--text-primary)' }}
      >
        {value}/10
      </span>
    </div>
  )
}
