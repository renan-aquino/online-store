'use client'

import { styled } from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";

const FilterBarContainer = styled.div `
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
 
`

export function FilterBar(){
    return(
        <FilterBarContainer>
            <FilterByType/>
            <FilterByPriority/>
        </FilterBarContainer>
    )
}