import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Kavindu's Portfolio",
  description: 'Personal portfolio website showcasing projects, skills, and professional background in software development.',
  generator: 'v0.dev',
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
