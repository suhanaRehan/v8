import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeScript from '@/components/ThemeScript'
import ChatBot from '@/components/ChatBot'

const siteUrl = 'https://www.securesphere.in'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Secure Sphere — Enterprise Cybersecurity, Software & AI Solutions',
    template: '%s | Secure Sphere',
  },
  description:
    'Secure Sphere delivers enterprise cybersecurity, software development, AI agents, and IT managed services for organizations that demand reliability and measurable results.',
  keywords: [
    'enterprise cybersecurity',
    'software development company',
    'AI solutions for enterprise',
    'managed IT services',
    'cloud security',
    'digital transformation consulting',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Secure Sphere',
    title: 'Secure Sphere — Enterprise Cybersecurity, Software & AI Solutions',
    description:
      'Enterprise cybersecurity, software development, AI agents, and IT managed services built for measurable business outcomes.',
    url: siteUrl,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Secure Sphere',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secure Sphere — Enterprise Technology Solutions',
    description: 'Cybersecurity, software development, AI agents, and IT solutions for the modern enterprise.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png?v=2', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico?v=2', sizes: 'any' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: [{ url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png?v=2', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png?v=2', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest?v=2',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ThemeScript />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  )
}
