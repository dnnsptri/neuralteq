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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var html = document.documentElement;
                  // Default to dark mode if no theme is set
                  if (!theme) {
                    theme = 'dark';
                    localStorage.setItem('theme', 'dark');
                  }
                  // Apply the stored theme
                  if (theme === 'dark') {
                    html.classList.add('dark');
                    html.setAttribute('data-theme', 'dark');
                  } else {
                    html.classList.remove('dark');
                    html.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
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
      <body className={`${workSans.variable} font-sans min-h-screen transition-colors`}>
        {children}
        <SocialIcons />
      </body>
    </html>
  )
} 