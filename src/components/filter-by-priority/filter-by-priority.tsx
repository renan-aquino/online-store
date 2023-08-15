import { styled } from "styled-components"
import { DownArrowIcon } from "../icons/down-arrow-icon"
import { useState } from "react"
import { useFilter } from "@/hooks/useFilter"
import { PriorityType } from "@/types/priority-types"

interface FilterByPriority {

}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        color: var(--clr-dark);
        background: transparent;

        display: flex;
        align-items: center;
        justify-context: center;

        svg {
            margin-left: 16px;
        }
    }
`

const PriorityFilter = styled.div `
    width: 156px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4p;
    padding: 12px 16px;

    position: absolute;
    top: 100%;

    li {
        font-size: 14px;
        cursor: pointer;
    }

    li + li{
        margin-top: 4px;
    }
`

export function FilterByPriority(){
    const [isOpen, setIsOpen] = useState(false);
    const { setPriority } = useFilter();

    const handleOpen = () => setIsOpen(prev => !prev)

    const handleUpdatePriority = (value: PriorityType) => {
        setPriority(value);
        setIsOpen(false);
    }

    return(
        <FilterContainer>
            <button onClick={handleOpen}>
                Order by
                <DownArrowIcon/>
            </button>

            {isOpen && 
                <PriorityFilter>
                    <li onClick={() => handleUpdatePriority(PriorityType.RELEASE_DATE)}>Release date</li>
                    <li onClick={() => handleUpdatePriority(PriorityType.LOWEST_PRICE)}>Lowest price</li>
                    <li onClick={() => handleUpdatePriority(PriorityType.HIGHEST_PRICE)}>Highest price</li>
                </PriorityFilter>
            }
        </FilterContainer>
    )
}
