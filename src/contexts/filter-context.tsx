'use client'

import { FilterType } from '@/types/filter-types'
import { PriorityType } from '@/types/priority-types'
import { ReactNode, createContext, useState } from 'react'

export const FilterContext = createContext({
    search: '',
    type: FilterType.ALL,
    priority: PriorityType.RELEASE_DATE,
    
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
    const [priority, setPriority] = useState(PriorityType.RELEASE_DATE)

    return(
        <FilterContext.Provider value={{search, type, priority, setSearch, setType, setPriority}}>
            {children}
        </FilterContext.Provider>
    )
}