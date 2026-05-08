'use client'

import { motion } from 'framer-motion'
import type { JudgeMood } from '@/lib/game-types'

interface MoodMeterProps {
  mood: JudgeMood
  label: string
  moodLabels: Record<JudgeMood, string>
}

const MOODS: JudgeMood[] = ['annoyed', 'confused', 'amused', 'impressed', 'convinced']

const MOOD_COLORS: Record<JudgeMood, string> = {
  annoyed: '#FF4444',
  confused: '#FF8C00',
  amused: '#FFB800',
  impressed: '#00C8FF',
  convinced: '#00E5A0',
}

const MOOD_INDEX: Record<JudgeMood, number> = {
  annoyed: 0,
  confused: 1,
  amused: 2,
  impressed: 3,
  convinced: 4,
}

export function MoodMeter({ mood, label, moodLabels }: MoodMeterProps) {
  const currentIndex = MOOD_INDEX[mood]
  const currentColor = MOOD_COLORS[mood]

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
          {label}
        </span>
        <motion.span
          key={mood}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-bold"
          style={{ color: currentColor }}
        >
          {moodLabels[mood]}
        </motion.span>
      </div>

      <div className="flex gap-1.5">
        {MOODS.map((m, i) => (
          <motion.div
            key={m}
            className="flex-1 h-2 rounded-full"
            animate={{
              backgroundColor:
                i <= currentIndex ? MOOD_COLORS[m] : 'rgba(128,128,128,0.15)',
              opacity: i <= currentIndex ? 1 : 0.3,
            }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          />
        ))}
      </div>
    </div>
  )
}
