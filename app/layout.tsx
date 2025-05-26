import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Terms',
  description: 'AI Terms Everyone Should Know',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
