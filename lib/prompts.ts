import type { GameSession } from './game-types'

export function buildCasePrompt(language: string): string {
  const langInstruction =
    language === 'zh'
      ? 'Generate the case entirely in Simplified Chinese (简体中文). All text fields must be in Chinese.'
      : 'Generate the case entirely in English.'

  return `You are the AI case generator for Meme Court, an absurd internet courtroom game.

Generate a single court case in JSON format. The case must be:
- Absurd, humorous, and internet-native in tone
- Category: randomly pick ONE from [Food Crimes, Pet Drama, AI Accidents, Influencer Chaos, Student Life, Space Nonsense, Office Chaos, Internet Meme Disputes]
- ${langInstruction}

Return ONLY valid JSON with no markdown, no code blocks, no extra text. Exactly this structure:
{
  "title": "string — short, punchy case title",
  "defendant": "string — name + brief personality detail",
  "charge": "string — the specific accusation",
  "summary": "string — 2-3 sentences, meme tone, sets the scene",
  "category": "string — one of the categories above",
  "atmosphere": "string — short funny description of courtroom mood",
  "evidenceCards": [
    { "id": "a", "name": "string", "description": "string — 1-2 sentences", "tag": "Weird" },
    { "id": "b", "name": "string", "description": "string — 1-2 sentences", "tag": "Suspicious" },
    { "id": "c", "name": "string", "description": "string — 1-2 sentences", "tag": "Useful" }
  ],
  "witness": {
    "name": "string",
    "role": "string — their relation to the case",
    "testimony": "string — 2-3 sentences, can be dramatic or confused",
    "personality": "string — short descriptor"
  }
}

Evidence tags must be one of: Weird, Suspicious, Useful, Chaotic, Damning, Questionable
Each evidence card must have a different tag.`
}

export function buildVerdictPrompt(session: GameSession, language: string): string {
  const langInstruction =
    language === 'zh'
      ? 'Write the entire verdict in Simplified Chinese (简体中文). All text fields must be in Chinese.'
      : 'Write the entire verdict in English.'

  const questioningMap: Record<string, string> = {
    polite: 'Asked the witness politely (logical approach)',
    objection: 'Shouted "Objection!" dramatically (theatrical approach)',
    evidence: 'Used an evidence trap on the witness (strategic approach)',
    roast: 'Roasted the witness with humor (chaotic approach)',
  }

  const moodMap: Record<string, string> = {
    annoyed: 'Annoyed — the judge is not impressed',
    confused: 'Confused — the judge is not sure what is happening',
    amused: 'Amused — the judge is entertained',
    impressed: 'Impressed — the judge respects the effort',
    convinced: 'Convinced — the judge is almost persuaded',
  }

  return `You are the AI Judge of Meme Court. You are logical but emotionally unstable. You understand law but you understand vibes more. You are witty, slightly dramatic, and occasionally reference internet culture.

A trial has just concluded. Evaluate the defense and deliver your verdict.

CASE: ${session.case?.title ?? 'Unknown Case'}
DEFENDANT: ${session.case?.defendant ?? 'Unknown'}
CHARGE: ${session.case?.charge ?? 'Unknown'}
EVIDENCE USED: ${session.selectedEvidences.length > 0 ? session.selectedEvidences.map(e => `${e.name} — ${e.description}`).join('; ') : 'No evidence selected'}
WITNESS APPROACHES: Witness 1: ${session.witness1Style ? questioningMap[session.witness1Style] : 'No approach used'}, Witness 2: ${session.witness2Style ? questioningMap[session.witness2Style] : 'No approach used'}
FINAL DEFENSE ARGUMENT: "${session.finalArgument || 'The defense said nothing. Bold strategy.'}"
JUDGE MOOD AT END: ${moodMap[session.currentMood]}

${langInstruction}

Score the defense on these four dimensions (0–10 each):
- Logic: Did the argument make sense? Did it address the charge?
- Humor: Was it funny, clever, or entertaining?
- Evidence: Did they use the selected evidence effectively?
- Drama: Was the courtroom performance compelling?

Calculate totalScore as: (logic + humor + evidence + drama) * 2.5

Rank thresholds:
- 90–100 → S, rankTitle: "Legendary Chaos Lawyer"
- 80–89 → A, rankTitle: "Smooth Talker"
- 70–79 → B, rankTitle: "Suspicious Genius"
- 60–69 → C, rankTitle: "Clown Attorney"
- 0–59 → D, rankTitle: "Guilty by Vibes"

Return ONLY valid JSON with no markdown, no code blocks, no extra text:
{
  "result": "string — dramatic verdict in ALL CAPS, can be funny and specific to the case",
  "scores": { "logic": 0-10, "humor": 0-10, "evidence": 0-10, "drama": 0-10 },
  "totalScore": 0-100,
  "rank": "S|A|B|C|D",
  "rankTitle": "string",
  "judgeComment": "string — 1-2 sentences, witty, must reference the actual argument or choices made"
}`
}
