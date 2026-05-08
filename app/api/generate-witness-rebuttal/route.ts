import { NextRequest, NextResponse } from 'next/server'
import { callAI, parseAIJson } from '@/lib/ai'
import type { RebuttalResult, QuestioningStyle, ApiResponse } from '@/lib/game-types'

// Flat request shape — no full GameSession needed
interface WitnessRebuttalRequest {
  witnessName: string
  witnessRole: string
  witnessTestimony: string
  witnessPersonality: string
  witnessRebuttal: string       // static fallback text
  witnessNumber: 1 | 2
  questioningStyle: QuestioningStyle
  language: string
  caseTitle: string
  caseDefendant: string
  caseCharge: string
  selectedEvidenceNames: string[]
  currentMood: string
}

const STYLE_MAP: Record<QuestioningStyle, string> = {
  polite:    'asked politely and logically',
  objection: 'shouted "Objection!" dramatically',
  evidence:  'used evidence to trap them',
  roast:     'roasted them with humor',
}

const MOOD_MAP: Record<string, string> = {
  annoyed:   'Annoyed (not impressed)',
  confused:  'Confused (unsure)',
  amused:    'Amused (entertained)',
  impressed: 'Impressed (respecting effort)',
  convinced: 'Convinced (almost persuaded)',
}

function buildPrompt(req: WitnessRebuttalRequest): string {
  const langInstruction = req.language === 'zh'
    ? 'Generate the entire response in Simplified Chinese (简体中文).'
    : 'Generate the entire response in English.'

  const evidenceInfo = req.selectedEvidenceNames.length > 0
    ? `Evidence selected by defense: ${req.selectedEvidenceNames.join(', ')}`
    : 'No evidence selected by defense'

  return `You are ${req.witnessName}, a witness in Meme Court. You have a ${req.witnessPersonality} personality.

CONTEXT:
Case: ${req.caseTitle} | Defendant: ${req.caseDefendant} | Charge: ${req.caseCharge}
${evidenceInfo}
Your original testimony: "${req.witnessTestimony}"
Judge mood: ${MOOD_MAP[req.currentMood] ?? req.currentMood}

WHAT HAPPENED:
The defense lawyer just ${STYLE_MAP[req.questioningStyle]} during cross-examination of you (Witness ${req.witnessNumber}).

TASK:
Generate your rebuttal response. Stay in character. React appropriately to how you were questioned.

${langInstruction}

Return ONLY valid JSON (no markdown, no code blocks):
{
  "rebuttal": "your response in character, 1-2 sentences, emotional and specific to the questioning style",
  "moodChange": <integer from -20 to 20>,
  "reaction": "defensive|angry|nervous|indignant|confused"
}`
}

export async function POST(req: NextRequest) {
  try {
    const body: WitnessRebuttalRequest = await req.json()

    const prompt = buildPrompt(body)
    const raw = await callAI(
      [{ role: 'user', content: prompt }],
      { temperature: 0.9, maxTokens: 300 }
    )

    const parsed = parseAIJson<RebuttalResult>(raw)

    if (!parsed?.rebuttal) {
      throw new Error('Invalid rebuttal structure from AI')
    }

    const response: RebuttalResult = {
      rebuttal:   parsed.rebuttal,
      moodChange: Math.max(-20, Math.min(20, Number(parsed.moodChange) || 0)),
      reaction:   parsed.reaction || 'defensive',
    }

    console.log(`🗣️ [REBUTTAL] Witness ${body.witnessNumber} (${body.questioningStyle}) → ${response.reaction} | mood ${response.moodChange > 0 ? '+' : ''}${response.moodChange}`)

    return NextResponse.json<ApiResponse<RebuttalResult>>({ success: true, data: response })

  } catch (error) {
    console.error('❌ [REBUTTAL] Error:', error)

    const fallback: RebuttalResult = {
      rebuttal:   'I... I need a moment to collect my thoughts.',
      moodChange: 0,
      reaction:   'confused',
    }

    return NextResponse.json<ApiResponse<RebuttalResult>>({ success: false, fallback: true, data: fallback })
  }
}
