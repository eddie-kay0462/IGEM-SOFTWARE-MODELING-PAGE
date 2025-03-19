import type { Metadata } from 'next'
import './globals.css'
import SponsorFooter from '@/components/sponsor-footer'

export const metadata: Metadata = {
  title: 'Software Modeling',
  description: 'Software Modeling',
  generator: 'Software Modeling',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <SponsorFooter />
      </body>
    </html>
  )
}
