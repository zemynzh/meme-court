import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { GlobalNav } from '@/components/layout/GlobalNav'
import { TranslationProvider } from '@/context/TranslationContext'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Meme Court: Objection!',
  description:
    'An AI-powered courtroom game for absurd internet cases. Defend the weirdest cases on the internet. Convince the AI Judge.',
  keywords: ['game', 'AI', 'courtroom', 'meme', 'mobile'],
  openGraph: {
    title: 'Meme Court: Objection!',
    description: 'Defend absurd internet cases in front of an AI Judge.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0F' },
    { media: '(prefers-color-scheme: light)', color: '#F5F0E8' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('meme-court-theme');
                document.documentElement.setAttribute('data-theme', t === 'light' ? 'light' : 'dark');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={inter.variable}>
        <TranslationProvider>
          {/* Global full-width navigation bar — visible on all pages */}
          <GlobalNav />
          {/* Page content sits below the nav */}
          <div className="page-below-nav">
            {children}
          </div>
        </TranslationProvider>
      </body>
    </html>
  )
}
