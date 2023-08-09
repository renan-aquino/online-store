'use client'

import { ProductList } from '@/components/product-list'
import s from './page.module.css'
import { FilterBar } from '@/components/filter-bar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main className={s.main}>
      <FilterBar/>
      <ProductList/>
      </main>
    </QueryClientProvider>
    
  )
}
