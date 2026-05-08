import type { CaseCategory, EvidenceTag } from '@/lib/game-types'

// ─── Bilingual evidence card ──────────────────────────────────────────────────

export interface BilingualEvidence {
  id: string
  name: string
  description: string
  credibility: number  // 1–10, shown as a rating
  tag: EvidenceTag
}

// ─── Bilingual witness ────────────────────────────────────────────────────────

export interface BilingualWitness {
  name: string
  role: string
  testimony: string
  personality: string
  rebuttal: string  // what they say when pushed back
}

// ─── Verdict comments per rank ────────────────────────────────────────────────

export interface VerdictComments {
  S: string
  A: string
  B: string
  C: string
  D: string
}

// ─── Single language case content ────────────────────────────────────────────

export interface CaseContent {
  title: string
  defendant: string
  charge: string
  summary: string
  atmosphere: string
  openingStatement: string       // judge's dramatic opening
  evidenceCards: BilingualEvidence[]  // 5 cards, player picks 2
  witnesses: BilingualWitness[]       // 2 witnesses
  judgeQuestion: string          // judge asks player one question
  verdictOptions: {
    guilty: string
    notGuilty: string
    partial: string
  }
  judgeComments: VerdictComments
}

// ─── Full bilingual case ──────────────────────────────────────────────────────

export interface BilingualCase {
  id: string
  category: CaseCategory
  en: CaseContent
  zh: CaseContent
}
