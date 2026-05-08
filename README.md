# ⚖️ Meme Court: Objection!

An AI-powered courtroom game where you defend the internet's most absurd cases. Choose evidence, cross-examine witnesses, and convince an AI Judge with your most chaotic legal arguments.

**[▶ Play Now](https://memecourt.ozemyn.uk)** · No download required · Works on mobile

---

## What is this?

Meme Court is a single-player browser game built around a 10-phase trial flow. Every session is unique — cases are randomly selected from a curated library of absurd internet scenarios: raccoons stealing pizza, AIs giving terrible dating advice, influencers accidentally live-streaming a plant theft, and more.

The AI participates in three key moments per game:

| Call | When | What AI does |
|------|------|--------------|
| **Witness 1 Rebuttal** | After you cross-examine Witness 1 | Generates an in-character emotional response based on your questioning style |
| **Witness 2 Rebuttal** | After you cross-examine Witness 2 | Same — different witness personality, different reaction |
| **Final Verdict** | After you submit your closing argument | Scores your defense across 4 dimensions and delivers a dramatic ruling |

---

## Game Flow

```
Opening Statement → Read the Case → Choose Evidence (2 of 5)
→ Cross-Examine Witness 1 → Witness 1 Rebuttal (AI)
→ Cross-Examine Witness 2 → Witness 2 Rebuttal (AI)
→ Judge's Question → Final Defense
→ Verdict (AI)
```

### Questioning Styles

Each witness can be approached 4 ways, each shifting the judge's mood differently:

- **Ask Politely** — logical approach, boosts Logic score
- **Shout "Objection!"** — theatrical approach, boosts Drama score
- **Evidence Trap** — strategic approach, boosts Evidence score
- **Roast the Witness** — chaotic approach, boosts Humor score

### Verdict Scoring

The AI Judge scores your defense across four dimensions (0–10 each):

- **Logic** — Did the argument make sense?
- **Humor** — Was it funny or clever?
- **Evidence** — Did you use your selected evidence effectively?
- **Drama** — Was the courtroom performance compelling?

Total score (0–100) determines your rank:

| Rank | Score | Title |
|------|-------|-------|
| S | 90–100 | Legendary Chaos Lawyer |
| A | 80–89 | Smooth Talker |
| B | 70–79 | Suspicious Genius |
| C | 60–69 | Clown Attorney |
| D | 0–59 | Guilty by Vibes |

---

## Case Library

10 hand-crafted bilingual cases across 8 categories:

| # | Case | Category |
|---|------|----------|
| 001 | The Great Pizza Heist | Food Crimes |
| 002 | The Cat Manipulation Scandal | Pet Drama |
| 003 | Who Owns the Moon? | Space Nonsense |
| 004 | AI Dating Advice Gone Wrong | AI Accidents |
| 005 | The Background Plant Theft | Influencer Chaos |
| 006 | The Unpaid Student Tab | Student Life |
| 007 | The Robot Wedding Crasher | AI Accidents |
| 008 | The Office Printer Conspiracy | Office Chaos |
| 009 | Alien Wi-Fi Theft | Space Nonsense |
| 010 | The Parrot Witness | Pet Drama |

Each case includes an opening statement, 5–6 evidence cards with credibility ratings, 2 witnesses with distinct personalities, a judge question, 3 verdict options, and rank-specific judge comments (S through D). All cases are fully bilingual (English / Simplified Chinese).

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| AI | OpenAI-compatible API (configurable) |
| Deployment | Vercel |

No external UI component libraries. All icons are custom SVG. Fully responsive — mobile-first layout.

---

## Running Locally

```bash
git clone https://github.com/your-username/meme-court-objection
cd meme-court-objection
npm install
cp .env.local.example .env.local
```

Fill in your AI provider credentials in `.env.local`:

```env
AI_API_BASE_URL=https://api.openai.com/v1
AI_API_KEY=your-key-here
AI_MODEL=gpt-4o
```

Any OpenAI-compatible endpoint works.

```bash
npm run dev
# open http://localhost:3000
```

---

## Project Structure

```
app/
  page.tsx                      # Home / landing page
  trial/page.tsx                # Main game — all phase logic and AI calls
  api/
    generate-case/              # Returns a random case from the library
    generate-witness-rebuttal/  # AI: witness rebuttal (×2 per game)
    generate-verdict/           # AI: final verdict and scoring

components/
  game/                         # Phase-specific UI components
  ui/                           # Button, Card, Icons, MoodMeter, etc.
  layout/                       # Header, Nav, LanguageToggle

context/
  GameContext.tsx               # Global game state (phase, session, mood)

lib/
  ai.ts                         # AI abstraction layer + JSON parser
  game-types.ts                 # All TypeScript types
  prompts.ts                    # Verdict prompt builder

data/
  cases/                        # 10 bilingual case files
  index.ts                      # Random case selector

locales/
  en.json                       # English UI strings
  zh.json                       # Simplified Chinese UI strings
```

---

## Built With

This project was developed using [Kiro](https://kiro.dev), an AI-powered IDE, for code generation, architecture design, and refactoring.

---

*Completed May 8, 2026*
