// Centralized SVG icon library
// All icons use currentColor — set color via CSS/style prop
// All icons are stroke-based (line style), no emoji, no raster

interface IconProps {
  size?: number
  className?: string
  style?: React.CSSProperties
}

export function ScalesIcon({ size = 24, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} style={style}>
      <line x1="12" y1="3"  x2="12" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="3"  y1="6"  x2="21" y2="6"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="8"  y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="3"  y1="6"  x2="5"  y2="13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="3"  y1="6"  x2="1"  y2="13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M1 13 Q3 16 5 13"   stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      <line x1="21" y1="6"  x2="23" y2="13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="21" y1="6"  x2="19" y2="13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M19 13 Q21 16 23 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export function SunIcon({ size = 18, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} style={style}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="2"  x2="12" y2="5"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="2"  y1="12" x2="5"  y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="19" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="4.22"  y1="4.22"  x2="6.34"  y2="6.34"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="4.22"  y1="19.78" x2="6.34"  y2="17.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function MoonIcon({ size = 16, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} style={style}>
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

export function UserIcon({ size = 24, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} style={style}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Handshake — polite questioning
export function HandshakeIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} style={style}>
      <path d="M2 12l4-4 4 4-4 4-4-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M22 12l-4-4-4 4 4 4 4-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <line x1="10" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

// Raised hand — objection
export function RaisedHandIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} style={style}>
      <path
        d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v1M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      />
      <path
        d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

// Magnifier — evidence trap
export function SearchIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} style={style}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <line x1="16.5" y1="16.5" x2="22" y2="22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

// Zap / lightning — roast
export function ZapIcon({ size = 20, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} style={style}>
      <polyline
        points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

// Gavel — loading / verdict
export function GavelIcon({ size = 48, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} style={style}>
      {/* Handle */}
      <line x1="14" y1="14" x2="21" y2="21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      {/* Head */}
      <rect x="2" y="6" width="12" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
      {/* Strike line */}
      <line x1="8" y1="6" x2="8" y2="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Robot / AI indicator
export function BotIcon({ size = 14, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} style={style}>
      <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="9"  cy="14" r="1.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="15" cy="14" r="1.5" stroke="currentColor" strokeWidth="1.6" />
      <line x1="12" y1="3" x2="12" y2="8"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="3" r="1" stroke="currentColor" strokeWidth="1.6" />
      <line x1="7"  y1="20" x2="7"  y2="24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="17" y1="20" x2="17" y2="24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

// Trophy / star — verdict rank
export function StarIcon({ size = 48, className, style }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} style={style}>
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}
