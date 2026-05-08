import { NextRequest, NextResponse } from 'next/server'
import { getRandomCase } from '@/data/index'
import type { GameCase, ApiResponse } from '@/lib/game-types'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const language: 'en' | 'zh' = body.language === 'zh' ? 'zh' : 'en'

    const gameCase: GameCase = getRandomCase(language)

    return NextResponse.json<ApiResponse<GameCase>>({
      success: true,
      data: gameCase,
    })
  } catch (error) {
    console.error('[generate-case] Error:', error)
    return NextResponse.json<ApiResponse<GameCase>>(
      { success: false, data: getRandomCase('en') },
      { status: 500 }
    )
  }
}
