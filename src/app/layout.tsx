import { Header } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { DefaultProviders } from '@/components/default-providers'
import { Footer } from '@/components/footer'

// const inter = Inter({ 
//   weight: ['300', '400', '500', '600'],
//   subsets: ['latin'] 
// })

export const metadata: Metadata = {
  title: 'Online Store',
  description: 'Fictional ecommerce website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <DefaultProviders>
          <Header/>
          {children}
          <Footer/>
        </DefaultProviders>

        </body>
    </html>
  )
}
