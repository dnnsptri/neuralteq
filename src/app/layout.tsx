import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-work-sans',
})

export const metadata: Metadata = {
  title: 'Neuralteq',
  description: 'Neuralteq - Business Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} font-sans min-h-screen transition-colors`}>
        {children}
      </body>
    </html>
  )
} 