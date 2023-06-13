import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from './composites/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trung Tran portfolio',
  description: 'A small and fun project made by Trung Tran',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Navigation />
          {children}
        </main>
      </body>
    </html>
  )
}
