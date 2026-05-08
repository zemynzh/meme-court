import type { Verdict } from './game-types'

function buildShareText(
  verdict: Verdict,
  caseTitle: string,
  template: string
): string {
  return template
    .replace('{caseTitle}', caseTitle)
    .replace('{result}', verdict.result)
    .replace('{rank}', verdict.rank)
    .replace('{rankTitle}', verdict.rankTitle)
    .replace('{totalScore}', String(verdict.totalScore))
    .replace('{judgeComment}', verdict.judgeComment)
}

/**
 * Share the verdict result.
 *
 * iOS Safari requires navigator.share() to be called synchronously
 * within a user gesture handler. We call it immediately (synchronously
 * from the button click), then fall back to clipboard if it fails or
 * is unavailable.
 *
 * Returns a promise that resolves to the outcome.
 */
export async function shareResult(
  verdict: Verdict,
  caseTitle: string,
  shareTemplate: string
): Promise<'shared' | 'copied' | 'failed'> {
  const text = buildShareText(verdict, caseTitle, shareTemplate)

  // Web Share API — call synchronously from user gesture context
  // navigator.share must be invoked before any await to satisfy iOS Safari
  if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
    try {
      // This call is intentionally NOT awaited before being initiated —
      // we start it synchronously, then await the promise
      const sharePromise = navigator.share({ text })
      await sharePromise
      return 'shared'
    } catch (err) {
      // AbortError = user cancelled — treat as non-failure, fall through
      // NotAllowedError = gesture requirement not met — fall through to clipboard
      const name = (err as Error)?.name
      if (name !== 'AbortError') {
        // Only fall through to clipboard for non-cancel errors
      }
      // User cancelled — don't show clipboard fallback
      if (name === 'AbortError') return 'shared'
    }
  }

  // Clipboard fallback
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(text)
      return 'copied'
    }
    // Legacy fallback for older browsers
    const el = document.createElement('textarea')
    el.value = text
    el.style.position = 'fixed'
    el.style.opacity = '0'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    return 'copied'
  } catch {
    return 'failed'
  }
}
