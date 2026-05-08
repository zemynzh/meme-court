import type { BilingualCase, CaseContent } from './types'
import type { GameCase } from '@/lib/game-types'

import case001 from './cases/001-pizza-heist'
import case002 from './cases/002-cat-manipulation'
import case003 from './cases/003-moon-ownership'
import case004 from './cases/004-ai-dating-advice'
import case005 from './cases/005-influencer-plant'
import case006 from './cases/006-student-tabs'
import case007 from './cases/007-robot-wedding'
import case008 from './cases/008-office-printer'
import case009 from './cases/009-alien-wifi'
import case010 from './cases/010-parrot-secrets'

export const ALL_CASES: BilingualCase[] = [
  case001, case002, case003, case004, case005,
  case006, case007, case008, case009, case010,
]

export function getRandomCase(language: 'en' | 'zh' = 'en'): GameCase {
  const bilingual = ALL_CASES[Math.floor(Math.random() * ALL_CASES.length)]
  return toGameCase(bilingual, language)
}

export function getCaseById(id: string, language: 'en' | 'zh' = 'en'): GameCase | null {
  const bilingual = ALL_CASES.find((c) => c.id === id)
  if (!bilingual) return null
  return toGameCase(bilingual, language)
}

function toGameCase(bilingual: BilingualCase, language: 'en' | 'zh'): GameCase {
  const c: CaseContent = bilingual[language]
  return {
    id: bilingual.id,
    category: bilingual.category,
    title: c.title,
    defendant: c.defendant,
    charge: c.charge,
    summary: c.summary,
    atmosphere: c.atmosphere,
    openingStatement: c.openingStatement,
    evidenceCards: c.evidenceCards.map((e) => ({
      id: e.id,
      name: e.name,
      description: e.description,
      credibility: e.credibility,
      tag: e.tag,
    })),
    witnesses: c.witnesses.map((w) => ({
      name: w.name,
      role: w.role,
      testimony: w.testimony,
      personality: w.personality,
      rebuttal: w.rebuttal,
    })),
    judgeQuestion: c.judgeQuestion,
    verdictOptions: c.verdictOptions,
    judgeComments: c.judgeComments,
  }
}

export type { BilingualCase, CaseContent }
