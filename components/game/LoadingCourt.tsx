'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '@/hooks/useTranslation'
import { GavelIcon } from '@/components/ui/Icons'

// Typewriter hook for the current message
function useTypewriter(text: string, speed = 28) {
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

export function LoadingCourt() {
  const { t, tArray } = useTranslation()
  const messages = tArray('loading.messages')
  const [msgIndex, setMsgIndex] = useState(0)

  useEffect(() => {
    if (messages.length === 0) return
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [messages.length])

  const currentMsg = messages[msgIndex] ?? '...'
  const displayed = useTypewriter(currentMsg)
  const isTyping = displayed.length < currentMsg.length

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="phase-inner"
      style={{ alignItems: 'center', justifyContent: 'center', gap: '32px' }}
    >
      {/* ── Gavel with orbit ring ── */}
      <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Orbit ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '2px solid transparent',
            borderTopColor: 'var(--accent-primary)',
            borderRightColor: 'rgba(255,45,120,0.3)',
          }}
        />
        {/* Outer pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: '-8px',
            borderRadius: '50%',
            border: '1px solid var(--accent-primary)',
          }}
        />
        {/* Gavel icon */}
        <motion.div
          animate={{ rotate: [-18, 18, -18] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: 'var(--accent-primary)' }}
        >
          <GavelIcon size={48} />
        </motion.div>
      </div>

      {/* ── Title ── */}
      <div style={{ textAlign: 'center' }}>
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: 'clamp(18px, 4vw, 22px)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '20px',
            letterSpacing: '-0.01em',
          }}
        >
          {t('loading.title')}
        </motion.h2>

        {/* Typewriter message */}
        <div style={{ minHeight: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={msgIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              style={{
                padding: '12px 18px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                maxWidth: '340px',
                textAlign: 'left',
              }}
            >
              <p style={{
                fontSize: '13px',
                lineHeight: 1.6,
                color: 'var(--text-secondary)',
              }}>
                {displayed}
                {isTyping && <span className="cursor-blink" />}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Progress dots ── */}
      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.25, 1, 0.25],
            }}
            transition={{
              duration: 1.4,
              delay: i * 0.18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: i === 2 ? '8px' : '5px',
              height: i === 2 ? '8px' : '5px',
              borderRadius: '50%',
              background: 'var(--accent-primary)',
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
