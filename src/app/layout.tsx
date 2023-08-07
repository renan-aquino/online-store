import { Header } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FilterContextProvider } from '@/contexts/filter-context'

const inter = Inter({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FilterContextProvider>
          <Header/>
          {children}
        </FilterContextProvider>

        </body>
    </html>
  )
}
