import type { Metadata } from 'next'
import './globals.css'
import SocialIcons from '@/components/SocialIcons'
import { Suspense } from 'react'

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
    <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D6WRDLDVCG"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D6WRDLDVCG');
            `,
          }}
        />
      </head>
      <body className={`font-sans min-h-screen transition-colors`}>
        <Suspense fallback={null}>
          {children}
        </Suspense>
        <SocialIcons />
      </body>
    </html>
  )
} 