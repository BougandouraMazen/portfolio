import type { Metadata } from 'next'
import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'

// Initialize fonts
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Mazen Bougandoura, Junior developer',
  description: 'Portfolio of Bougandoura Mazen Achraf, a junior developer looking for expeirnece with a team building complex project design and AI integration.',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
