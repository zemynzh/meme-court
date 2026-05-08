'use client'

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'
import en from '@/locales/en.json'
import zh from '@/locales/zh.json'

export type Language = 'en' | 'zh'

type LocaleData = Record<string, unknown>

const locales: Record<Language, LocaleData> = {
  en: en as LocaleData,
  zh: zh as LocaleData,
}

function getNestedValue(obj: LocaleData, path: string): string {
  const keys = path.split('.')
  let current: unknown = obj
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return path
    current = (current as Record<string, unknown>)[key]
  }
  if (typeof current === 'string') return current
  return path
}

interface TranslationContextValue {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string, vars?: Record<string, string>) => string
  tArray: (key: string) => string[]
}

const TranslationContext = createContext<TranslationContextValue | null>(null)

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en')

  // Read from localStorage on mount (client only)
  useEffect(() => {
    try {
      const stored = localStorage.getItem('meme-court-lang') as Language | null
      if (stored === 'en' || stored === 'zh') {
        setLangState(stored)
      }
    } catch {
      // localStorage not available (SSR)
    }
  }, [])

  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang)
    try {
      localStorage.setItem('meme-court-lang', newLang)
    } catch {
      // ignore
    }
  }, [])

  const t = useCallback(
    (key: string, vars?: Record<string, string>): string => {
      let value = getNestedValue(locales[lang], key)
      if (vars) {
        Object.entries(vars).forEach(([k, v]) => {
          value = value.replace(new RegExp(`\\{${k}\\}`, 'g'), v)
        })
      }
      return value
    },
    [lang]
  )

  const tArray = useCallback(
    (key: string): string[] => {
      const keys = key.split('.')
      let current: unknown = locales[lang]
      for (const k of keys) {
        if (current == null || typeof current !== 'object') return []
        current = (current as Record<string, unknown>)[k]
      }
      if (Array.isArray(current)) return current as string[]
      return []
    },
    [lang]
  )

  return (
    <TranslationContext.Provider value={{ lang, setLang, t, tArray }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation(): TranslationContextValue {
  const ctx = useContext(TranslationContext)
  if (!ctx) throw new Error('useTranslation must be used within TranslationProvider')
  return ctx
}
