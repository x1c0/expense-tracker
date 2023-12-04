import '@/app/ui/global.css'

import { Inter, Lora } from 'next/font/google'

import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata: Metadata = {
  title: {
    template: '%s | Expense Tracker',
    default: 'Expense Tracker',
  },
  description: 'A simple expense tracker app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} font-sans antialiased`}>
      <body className={inter.className + ' text-default'}>{children}</body>
    </html>
  )
}
