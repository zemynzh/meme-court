/**
 * AI Provider Abstraction Layer
 *
 * To switch AI providers, update these environment variables:
 *   AI_API_BASE_URL  — e.g. https://api.openai.com/v1  or  https://api.xiaomi.com/v1
 *   AI_API_KEY       — your API key
 *   AI_MODEL         — e.g. gpt-4o  or  xiaomi-model-name
 *
 * This module uses the OpenAI-compatible chat completion format.
 * Most modern AI providers (Xiaomi, Gemini via proxy, etc.) support this format.
 */

interface Message {
  role: 'system' | 'user' | 'assistant'
  content: string
}

interface AICallOptions {
  temperature?: number
  maxTokens?: number
}

export async function callAI(
  messages: Message[],
  options: AICallOptions = {}
): Promise<string> {
  const baseUrl = process.env.AI_API_BASE_URL
  const apiKey = process.env.AI_API_KEY
  const model = process.env.AI_MODEL

  if (!baseUrl || !apiKey || !model) {
    throw new Error('AI provider not configured. Check AI_API_BASE_URL, AI_API_KEY, AI_MODEL env vars.')
  }

  const requestBody = {
    model,
    messages,
    temperature: options.temperature ?? 0.9,
    max_tokens: options.maxTokens ?? 1200,
    response_format: { type: 'json_object' },
  }

  const startTime = Date.now()

  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(requestBody),
  })

  const duration = Date.now() - startTime

  if (!response.ok) {
    const errorText = await response.text()
    console.error(`❌ [AI] ${model} — ${response.status} ${response.statusText}:`, errorText)
    throw new Error(`AI API error ${response.status}: ${errorText}`)
  }

  const data = await response.json()
  const content = data?.choices?.[0]?.message?.content

  if (!content) {
    console.error('❌ [AI] Empty response content')
    throw new Error('AI returned empty response')
  }

  const usage = data?.usage
  console.log(`✅ [AI] ${model} — ${duration}ms | tokens: ${usage?.prompt_tokens ?? '?'}→${usage?.completion_tokens ?? '?'}`)

  return content
}

/**
 * Parse AI JSON response with error handling.
 * Returns null if parsing fails.
 */
export function parseAIJson<T>(raw: string): T | null {
  try {
    // Strip markdown code blocks if the model wraps output despite instructions
    const cleaned = raw
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/```\s*$/i, '')
      .trim()

    // Fix non-standard JSON: replace +N with N in numeric values (e.g. "moodChange": +5)
    const normalized = cleaned.replace(/:\s*\+(\d)/g, ': $1')

    return JSON.parse(normalized) as T
  } catch (error) {
    console.error('❌ [AI] JSON parse failed:', error, '\nRaw:', raw)
    return null
  }
}
