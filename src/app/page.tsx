'use client'

import { ProductList } from '@/components/product-list/product-list'
import { FilterBar } from '@/components/filter-bar/filter-bar'


export default function Home() {

  return (
        <main>
          <FilterBar/>
          <ProductList/>
        </main>
  )
}
