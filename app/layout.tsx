import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Celso Marrima — Backend Engineer',
  description:
    'Backend Engineer & Software Architect specializing in Java, Quarkus, distributed systems, microservices, and scalable API design.',
  keywords: [
    'Backend Engineer',
    'Java',
    'Quarkus',
    'Spring Boot',
    'Microservices',
    'Distributed Systems',
    'Software Architect',
    'Kafka',
    'PostgreSQL',
    'Docker',
  ],
  authors: [{ name: 'Celso Marrima' }],
  openGraph: {
    title: 'Celso Marrima — Backend Engineer',
    description:
      'Backend Engineer specializing in distributed systems, microservices, and scalable backend architecture.',
    type: 'website',
    url: 'https://devmarrima.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celso Marrima — Backend Engineer',
    description: 'Backend Engineer & Software Architect',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-text-primary antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
