import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import SocialIcons from '@/components/SocialIcons'

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-work-sans',
})

export const metadata: Metadata = {
  title: 'Neuralteq - Accelerating Subnet Adoption. Building the TAO Ecosystem',
  description: 'By staking securely with us, you help accelerate the furure of decentralized AI through TAO.',
  openGraph: {
    title: 'Neuralteq - Accelerating Subnet Adoption. Building the TAO Ecosystem',
    description: 'By staking securely with us, you help accelerate the furure of decentralized AI through TAO.',
    type: 'website',
  },
  twitter: {
    title: 'Neuralteq - Accelerating Subnet Adoption. Building the TAO Ecosystem',
    description: 'By staking securely with us, you help accelerate the furure of decentralized AI through TAO.',
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
        <SocialIcons />
      </body>
    </html>
  )
} 