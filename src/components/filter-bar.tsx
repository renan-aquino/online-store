'use client'

import { styled } from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";

const FilterBarContainer = styled.div `
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 509px){
        flex-direction: column;
        gap: 20px
    }
 
`

export function FilterBar(){
    return(
        <FilterBarContainer>
            <FilterByType/>
            <FilterByPriority/>
        </FilterBarContainer>
    )
}