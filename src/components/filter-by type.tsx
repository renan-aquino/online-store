'use client'

import { useFilter } from "@/hooks/useFilter"
import { FilterType } from "@/types/filter-types"
import { styled } from "styled-components"

interface FilterItemProps{
    selected: boolean
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    gap: 40px;
`

const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'}; 
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    text-transform: uppercase;
    color: var(--clr-dark)
    cursor: pointer;

    border-bottom: ${props => props.selected ? '4px solid var(--clr-accent)' : 'none'};
`

export function FilterByType(){
    const { type, setType} = useFilter();

    const handleChangeType = (value: FilterType) => {
        setType(value)
    }

    return(
        <FilterList>
            <FilterItem selected={type === FilterType.ALL} onClick={() => handleChangeType(FilterType.ALL)}>All</FilterItem>
            <FilterItem selected={type === FilterType.MUG} onClick={() => handleChangeType(FilterType.MUG)}>Mugs</FilterItem>
            <FilterItem selected={type === FilterType.ACCESSORY} onClick={() => handleChangeType(FilterType.ACCESSORY)}>Accessories</FilterItem>
            <FilterItem selected={type === FilterType.LAMP} onClick={() => handleChangeType(FilterType.LAMP)}>Lamps</FilterItem>
        </FilterList>
    )    
}