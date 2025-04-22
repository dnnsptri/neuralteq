import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-work-sans',
})

export const metadata: Metadata = {
  title: 'Neuralteq - Help Build the Future of Decentralised AI',
  description: 'By staking securely with us, you strengthen the network and support real-world adoption.',
  openGraph: {
    title: 'Neuralteq - Help Build the Future of Decentralised AI',
    description: 'By staking securely with us, you strengthen the network and support real-world adoption.',
    type: 'website',
  },
  twitter: {
    title: 'Neuralteq - Help Build the Future of Decentralised AI',
    description: 'By staking securely with us, you strengthen the network and support real-world adoption.',
    card: 'summary_large_image',
  },
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