import { NextRequest, NextResponse } from 'next/server'
import { callAI, parseAIJson } from '@/lib/ai'
import { buildVerdictPrompt } from '@/lib/prompts'
import type { GameSession, Verdict, VerdictRank, ApiResponse } from '@/lib/game-types'

const RANK_TITLES: Record<string, Record<VerdictRank, string>> = {
  en: {
    S: 'Legendary Chaos Lawyer',
    A: 'Smooth Talker',
    B: 'Suspicious Genius',
    C: 'Clown Attorney',
    D: 'Guilty by Vibes',
  },
  zh: {
    S: '传奇混乱律师',
    A: '能说会道者',
    B: '可疑天才',
    C: '小丑律师',
    D: '凭氛围定罪',
  },
}

function calculateRank(total: number): VerdictRank {
  if (total >= 90) return 'S'
  if (total >= 80) return 'A'
  if (total >= 70) return 'B'
  if (total >= 60) return 'C'
  return 'D'
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const session: GameSession = body.session
    const language: string = body.language ?? 'en'

    if (!session) throw new Error('No session data provided')

    const prompt = buildVerdictPrompt(session, language)
    const raw = await callAI(
      [{ role: 'user', content: prompt }],
      { temperature: 0.85, maxTokens: 600 }
    )

    const parsed = parseAIJson<Partial<Verdict>>(raw)

    if (!parsed || !parsed.scores || !parsed.result) {
      console.error('❌ [VERDICT] Invalid structure from AI:', parsed)
      throw new Error('Invalid verdict structure from AI')
    }

    const scores = {
      logic:    Math.min(10, Math.max(0, parsed.scores.logic    ?? 5)),
      humor:    Math.min(10, Math.max(0, parsed.scores.humor    ?? 5)),
      evidence: Math.min(10, Math.max(0, parsed.scores.evidence ?? 5)),
      drama:    Math.min(10, Math.max(0, parsed.scores.drama    ?? 5)),
    }

    const totalScore = Math.round(
      (scores.logic + scores.humor + scores.evidence + scores.drama) * 2.5
    )
    const rank = calculateRank(totalScore)
    const titles = RANK_TITLES[language] ?? RANK_TITLES.en

    const verdict: Verdict = {
      result:       parsed.result,
      scores,
      totalScore,
      rank,
      rankTitle:    titles[rank],
      judgeComment: parsed.judgeComment ?? 'The court has no further comments.',
    }

    console.log(`⚖️ [VERDICT] ${rank} — ${totalScore}pts | ${verdict.result}`)

    return NextResponse.json<ApiResponse<Verdict>>({ success: true, data: verdict })

  } catch (error) {
    console.error('❌ [VERDICT] Error:', error)

    const fallbackVerdict: Verdict = {
      result:       'TECHNICAL DIFFICULTIES IN THE COURTROOM',
      scores:       { logic: 5, humor: 5, evidence: 5, drama: 5 },
      totalScore:   50,
      rank:         'D',
      rankTitle:    'Guilty by Vibes',
      judgeComment: 'The court experienced technical difficulties. Please try again.',
    }

    return NextResponse.json<ApiResponse<Verdict>>({ success: false, fallback: true, data: fallbackVerdict })
  }
}
