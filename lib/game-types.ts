// ─── Evidence ────────────────────────────────────────────────────────────────

export type EvidenceTag =
  | 'Weird'
  | 'Suspicious'
  | 'Useful'
  | 'Chaotic'
  | 'Damning'
  | 'Questionable'

export interface Evidence {
  id: string
  name: string
  description: string
  credibility: number  // 1–10
  tag: EvidenceTag
}

// ─── Witness ─────────────────────────────────────────────────────────────────

export interface Witness {
  name: string
  role: string
  testimony: string
  personality: string
  rebuttal: string  // what they say when pushed back
}

// ─── Case ────────────────────────────────────────────────────────────────────

export type CaseCategory =
  | 'Food Crimes'
  | 'Pet Drama'
  | 'AI Accidents'
  | 'Influencer Chaos'
  | 'Student Life'
  | 'Space Nonsense'
  | 'Office Chaos'
  | 'Internet Meme Disputes'

export interface GameCase {
  id: string
  title: string
  defendant: string
  charge: string
  summary: string
  category: CaseCategory
  atmosphere: string
  openingStatement: string
  evidenceCards: Evidence[]       // 5 cards, player picks 2
  witnesses: Witness[]            // 2 witnesses
  judgeQuestion: string
  verdictOptions: {
    guilty: string
    notGuilty: string
    partial: string
  }
  judgeComments: {
    S: string
    A: string
    B: string
    C: string
    D: string
  }
}

// ─── Questioning ──────────────────────────────────────────────────────────────

export type QuestioningStyle = 'polite' | 'objection' | 'evidence' | 'roast'

// ─── Judge answer ─────────────────────────────────────────────────────────────

export type JudgeAnswer = 'confident' | 'humble' | 'deflect' | 'funny'

// ─── Judge Mood ───────────────────────────────────────────────────────────────

export type JudgeMood =
  | 'annoyed'
  | 'confused'
  | 'amused'
  | 'impressed'
  | 'convinced'

export interface MoodState {
  current: JudgeMood
  value: number // 0–100
}

// ─── Rebuttal Result ──────────────────────────────────────────────────────────

export interface RebuttalResult {
  rebuttal: string
  moodChange: number   // -20 to +20
  reaction: 'defensive' | 'angry' | 'nervous' | 'indignant' | 'confused'
}

// ─── Game Session ─────────────────────────────────────────────────────────────

export interface GameSession {
  case: GameCase | null
  // Evidence: player picks 2 out of 5
  selectedEvidences: Evidence[]
  // Witness questioning
  witness1Style: QuestioningStyle | null
  witness2Style: QuestioningStyle | null
  // AI-generated rebuttal results (fetched in page, stored here)
  rebuttal1: RebuttalResult | null
  rebuttal2: RebuttalResult | null
  // Judge question answer
  judgeAnswer: JudgeAnswer | null
  // Final argument
  finalArgument: string
  // Mood tracking
  moodHistory: JudgeMood[]
  currentMood: JudgeMood
}

// ─── Verdict ──────────────────────────────────────────────────────────────────

export type VerdictRank = 'S' | 'A' | 'B' | 'C' | 'D'

export interface VerdictScores {
  logic: number    // 0–10
  humor: number    // 0–10
  evidence: number // 0–10
  drama: number    // 0–10
}

export interface Verdict {
  result: string
  scores: VerdictScores
  totalScore: number
  rank: VerdictRank
  rankTitle: string
  judgeComment: string
}

// ─── Game Phase ───────────────────────────────────────────────────────────────

export type GamePhase =
  | 'idle'
  | 'loading_case'
  | 'opening'           // Judge's dramatic opening statement
  | 'case_reveal'       // Player reads the case details
  | 'evidence'          // Player picks 2 of 5 evidence cards
  | 'witness_1'         // Cross-examine witness 1
  | 'witness_1_rebuttal'// Witness 1 fights back, player responds
  | 'witness_2'         // Cross-examine witness 2
  | 'witness_2_rebuttal'// Witness 2 fights back, player responds
  | 'judge_question'    // Judge asks the player a direct question
  | 'defense'           // Player writes final argument
  | 'loading_verdict'
  | 'verdict'

// ─── API Response ─────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  success: boolean
  fallback?: boolean
  data: T
}
