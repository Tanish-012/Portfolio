import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'Tanish Kumar | Portfolio',
  description: 'Computer Science student at VIT Chennai and Software Development Intern. Experienced in full-stack web development, backend automation, and cloud tools.',
  keywords: ['Tanish Kumar', 'Software Engineer', 'Software Development Intern', 'Full Stack Developer', 'VIT Chennai', 'Next.js', 'React.js', 'Spring Boot', 'Node.js', 'AWS', 'Java', 'Portfolio'],
  authors: [{ name: 'Tanish Kumar' }],
  openGraph: {
    title: 'Tanish Kumar | Portfolio',
    description: 'Computer Science student at VIT Chennai and Software Development Intern. Experienced in full-stack web development, backend automation, and cloud tools.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanish Kumar | Portfolio',
    description: 'Computer Science student at VIT Chennai and Software Development Intern.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
