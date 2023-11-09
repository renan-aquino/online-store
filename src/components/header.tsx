'use client'

import { InputSearchIcon } from "./search-input"
import { CartControl } from "./cart-control"
import { useFilter } from "@/hooks/useFilter"
import { styled } from "styled-components"

const HeaderTag = styled.header `
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    background: white;
    z-index: 2;
`
const Container = styled.div `
    padding: 0px 15px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
        display: flex;
        align-items: center;
        gap: 24px;

        > div:first-child {
            @media(max-width: 611px){
                display:none;
            }
        }
    }

    
`
const Logo = styled.a `
    font-size: 32px;
    font-weight: 400;
    color: black;

    span {
        color: var(--clr-accent);
        font-weight: 500;
    }

    @media(max-width: 685px){
        font-size: 24px;
    }
`

export function Header(){ 
    const { search, setSearch } = useFilter();
    return(
        <HeaderTag>
            <Container>
                <Logo href="/">Online<span> Store</span></Logo>
                <div>
                    <InputSearchIcon
                            value={search}
                            $handleChange={setSearch}
                            placeholder="What are you looking for?">
                    </InputSearchIcon>
                    <CartControl/>
                </div>
            </Container>
        </HeaderTag>
    )
}