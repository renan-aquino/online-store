import s from './page.module.css'
import { FilterBar } from '@/components/filter-bar'

export default function Home() {
  return (
    <main className={s.main}>
      <FilterBar/>
    </main>
  )
}
