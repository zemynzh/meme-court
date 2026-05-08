'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { HandshakeIcon, SearchIcon, ZapIcon, RaisedHandIcon } from '@/components/ui/Icons'

interface BurstProps {
  onComplete: () => void
}

// ── OBJECTION — red dramatic burst (existing) ─────────────────────────────────
export function ObjectionBurst({ onComplete }: BurstProps) {
  useEffect(() => {
    const t = setTimeout(onComplete, 750)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(255,45,120,0.12)', backdropFilter: 'blur(3px)' }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -12 }}
        animate={{ scale: [0, 1.35, 1], rotate: [-12, 4, 0] }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div style={{
          fontSize: 'clamp(36px, 8vw, 56px)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          padding: '16px 32px',
          borderRadius: '16px',
          color: '#FF2D78',
          textShadow: '0 0 40px rgba(255,45,120,0.9)',
          background: 'rgba(255,45,120,0.1)',
          border: '3px solid #FF2D78',
          boxShadow: '0 0 60px rgba(255,45,120,0.4)',
          userSelect: 'none',
        }}>
          OBJECTION!
        </div>
      </motion.div>
    </motion.div>
  )
}

// ── POLITE — blue calm ripple ─────────────────────────────────────────────────
export function PoliteBurst({ onComplete }: BurstProps) {
  useEffect(() => {
    const t = setTimeout(onComplete, 700)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,200,255,0.08)', backdropFilter: 'blur(2px)' }}
    >
      {/* Ripple rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.3, opacity: 0.8 }}
          animate={{ scale: 2.5 + i * 0.6, opacity: 0 }}
          transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            width: '120px', height: '120px',
            borderRadius: '50%',
            border: '2px solid #00C8FF',
          }}
        />
      ))}

      {/* Center icon */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          width: '80px', height: '80px', borderRadius: '50%',
          background: 'rgba(0,200,255,0.15)',
          border: '2px solid #00C8FF',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#00C8FF',
          boxShadow: '0 0 40px rgba(0,200,255,0.5)',
        }}
      >
        <HandshakeIcon size={36} />
      </motion.div>
    </motion.div>
  )
}

// ── EVIDENCE TRAP — amber scan flash ─────────────────────────────────────────
export function EvidenceBurst({ onComplete }: BurstProps) {
  useEffect(() => {
    const t = setTimeout(onComplete, 700)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(255,184,0,0.08)', backdropFilter: 'blur(2px)' }}
    >
      {/* Scan line sweeping down */}
      <motion.div
        initial={{ top: '-10%', opacity: 0.9 }}
        animate={{ top: '110%', opacity: 0 }}
        transition={{ duration: 0.55, ease: 'linear' }}
        style={{
          position: 'absolute',
          left: 0, right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #FFB800, transparent)',
          boxShadow: '0 0 20px rgba(255,184,0,0.8)',
        }}
      />

      {/* Center magnifier */}
      <motion.div
        initial={{ scale: 0, rotate: -20, opacity: 0 }}
        animate={{ scale: [0, 1.3, 1], rotate: [-20, 5, 0], opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{
          width: '80px', height: '80px', borderRadius: '50%',
          background: 'rgba(255,184,0,0.15)',
          border: '2px solid #FFB800',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#FFB800',
          boxShadow: '0 0 40px rgba(255,184,0,0.5)',
        }}
      >
        <SearchIcon size={36} />
      </motion.div>

      {/* Corner brackets */}
      {[
        { top: '30%', left: '20%', rotate: 0 },
        { top: '30%', right: '20%', rotate: 90 },
        { bottom: '30%', left: '20%', rotate: 270 },
        { bottom: '30%', right: '20%', rotate: 180 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          style={{
            position: 'absolute',
            width: '20px', height: '20px',
            borderTop: '2px solid #FFB800',
            borderLeft: '2px solid #FFB800',
            transform: `rotate(${pos.rotate}deg)`,
            ...pos,
          }}
        />
      ))}
    </motion.div>
  )
}

// ── CONFIDENT — blue upward surge ────────────────────────────────────────────
export function ConfidentBurst({ onComplete }: BurstProps) {
  useEffect(() => {
    const t = setTimeout(onComplete, 700)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,200,255,0.08)', backdropFilter: 'blur(2px)' }}
    >
      {/* Rising bars */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0, opacity: 0.9 }}
          animate={{ scaleY: [0, 1.5, 0], opacity: [0.9, 0.6, 0] }}
          transition={{ duration: 0.55, delay: i * 0.06, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: `${15 + i * 18}%`,
            width: '8px',
            height: `${40 + i * 15}%`,
            background: 'linear-gradient(to top, #00C8FF, rgba(0,200,255,0))',
            borderRadius: '4px 4px 0 0',
            transformOrigin: 'bottom',
          }}
        />
      ))}

      {/* Center text */}
      <motion.div
        initial={{ scale: 0, y: 20, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], y: [20, -10, 0], opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{
          padding: '14px 28px',
          borderRadius: '14px',
          background: 'rgba(0,200,255,0.12)',
          border: '2px solid #00C8FF',
          boxShadow: '0 0 40px rgba(0,200,255,0.5)',
          color: '#00C8FF',
          fontSize: 'clamp(20px, 5vw, 32px)',
          fontWeight: 900,
          letterSpacing: '-0.01em',
          userSelect: 'none',
          textShadow: '0 0 20px rgba(0,200,255,0.8)',
        }}
      >
        CONFIDENT!
      </motion.div>
    </motion.div>
  )
}

// ── HUMBLE — green soft glow ──────────────────────────────────────────────────
export function HumbleBurst({ onComplete }: BurstProps) {
  useEffect(() => {
    const t = setTimeout(onComplete, 700)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,229,160,0.06)', backdropFilter: 'blur(2px)' }}
    >
      {/* Expanding soft circles */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.2, opacity: 0.5 }}
          animate={{ scale: 3 + i, opacity: 0 }}
          transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            width: '100px', height: '100px',
            borderRadius: '50%',
            background: `rgba(0,229,160,${0.12 - i * 0.03})`,
            border: '1px solid rgba(0,229,160,0.3)',
          }}
        />
      ))}

      {/* Center */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.1, 1], opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          padding: '14px 28px',
          borderRadius: '14px',
          background: 'rgba(0,229,160,0.12)',
          border: '2px solid #00E5A0',
          boxShadow: '0 0 40px rgba(0,229,160,0.4)',
          color: '#00E5A0',
          fontSize: 'clamp(20px, 5vw, 32px)',
          fontWeight: 900,
          letterSpacing: '-0.01em',
          userSelect: 'none',
          textShadow: '0 0 20px rgba(0,229,160,0.8)',
        }}
      >
        HUMBLE!
      </motion.div>
    </motion.div>
  )
}

// ── DEFLECT — amber smoke vanish ──────────────────────────────────────────────
export function DeflectBurst({ onComplete }: BurstProps) {
  useEffect(() => {
    const t = setTimeout(onComplete, 700)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(255,184,0,0.06)', backdropFilter: 'blur(2px)' }}
    >
      {/* Smoke puffs drifting sideways */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, scale: 0.3, opacity: 0.7 }}
          animate={{
            x: (i % 2 === 0 ? 1 : -1) * (60 + i * 30),
            y: -(20 + i * 15),
            scale: 1.5 + i * 0.3,
            opacity: 0,
          }}
          transition={{ duration: 0.55, delay: i * 0.07, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            width: '50px', height: '50px',
            borderRadius: '50%',
            background: `rgba(255,184,0,${0.2 - i * 0.04})`,
          }}
        />
      ))}

      {/* Center */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.15, 1], opacity: [0, 1, 0.9] }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          padding: '14px 28px',
          borderRadius: '14px',
          background: 'rgba(255,184,0,0.12)',
          border: '2px solid #FFB800',
          boxShadow: '0 0 40px rgba(255,184,0,0.4)',
          color: '#FFB800',
          fontSize: 'clamp(20px, 5vw, 32px)',
          fontWeight: 900,
          letterSpacing: '-0.01em',
          userSelect: 'none',
          textShadow: '0 0 20px rgba(255,184,0,0.8)',
        }}
      >
        DEFLECT!
      </motion.div>
    </motion.div>
  )
}

// ── FUNNY — pink star explosion ───────────────────────────────────────────────
export function FunnyBurst({ onComplete }: BurstProps) {
  useEffect(() => {
    const t = setTimeout(onComplete, 750)
    return () => clearTimeout(t)
  }, [onComplete])

  const stars = [0, 45, 90, 135, 180, 225, 270, 315]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0.9, 1] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.12 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(255,45,120,0.08)', backdropFilter: 'blur(2px)' }}
    >
      {/* Star burst particles */}
      {stars.map((angle, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
          animate={{
            x: Math.cos((angle * Math.PI) / 180) * 110,
            y: Math.sin((angle * Math.PI) / 180) * 110,
            scale: 0,
            opacity: 0,
          }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            fontSize: '18px',
            userSelect: 'none',
          }}
        >
          ★
        </motion.div>
      ))}

      {/* Center text */}
      <motion.div
        initial={{ scale: 0, rotate: -15 }}
        animate={{ scale: [0, 1.4, 1], rotate: [-15, 5, 0] }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{
          padding: '14px 28px',
          borderRadius: '14px',
          background: 'rgba(255,45,120,0.12)',
          border: '2px solid #FF2D78',
          boxShadow: '0 0 50px rgba(255,45,120,0.5)',
          color: '#FF2D78',
          fontSize: 'clamp(20px, 5vw, 32px)',
          fontWeight: 900,
          letterSpacing: '-0.01em',
          userSelect: 'none',
          textShadow: '0 0 20px rgba(255,45,120,0.9)',
        }}
      >
        FUNNY!
      </motion.div>
    </motion.div>
  )
}
export function RoastBurst({ onComplete }: BurstProps) {
  useEffect(() => {
    const t = setTimeout(onComplete, 700)
    return () => clearTimeout(t)
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0.8, 1] }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(255,107,53,0.12)', backdropFilter: 'blur(2px)' }}
    >
      {/* Flash overlay */}
      <motion.div
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(255,107,53,0.2)',
        }}
      />

      {/* Lightning bolt */}
      <motion.div
        initial={{ scale: 0, y: -40, opacity: 0 }}
        animate={{ scale: [0, 1.4, 1], y: [- 40, 0, 0], opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          width: '80px', height: '80px', borderRadius: '50%',
          background: 'rgba(255,107,53,0.15)',
          border: '2px solid #FF6B35',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#FF6B35',
          boxShadow: '0 0 50px rgba(255,107,53,0.6)',
        }}
      >
        <ZapIcon size={38} />
      </motion.div>

      {/* Spark particles */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{
            x: Math.cos((angle * Math.PI) / 180) * 80,
            y: Math.sin((angle * Math.PI) / 180) * 80,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 0.45, delay: 0.1 + i * 0.02, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            width: '6px', height: '6px',
            borderRadius: '50%',
            background: '#FF6B35',
            boxShadow: '0 0 8px rgba(255,107,53,0.8)',
          }}
        />
      ))}
    </motion.div>
  )
}
