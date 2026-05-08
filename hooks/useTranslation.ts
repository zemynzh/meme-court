// Re-export from the global context so all components share the same language state.
// All existing imports of useTranslation from this path continue to work unchanged.
export { useTranslation, type Language } from '@/context/TranslationContext'
