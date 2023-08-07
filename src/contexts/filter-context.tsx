'use client'

import { FilterType } from '@/types/filter-types'
import { PriorityType } from '@/types/priority-types'
import { ReactNode, createContext, useState } from 'react'

export const FilterContext = createContext({
    search: '',
    type: FilterType.ALL,
    priority: PriorityType.NEWEST,
    
    setSearch: (value: string) => {},
    setType: (value: FilterType) => {},
    setPriority: (value: PriorityType) => {}
})

interface ProviderProps {
    children: ReactNode
}


export function FilterContextProvider({ children } : ProviderProps){
    const [search, setSearch] = useState('')
    const [type, setType] = useState(FilterType.ALL)
    const [priority, setPriority] = useState(PriorityType.NEWEST)

    return(
        <FilterContext.Provider value={{search, type, priority, setSearch, setType, setPriority}}>
            {children}
        </FilterContext.Provider>
    )
}