'use client'

import { InputSearchIcon } from "./search-input/search-input"
import { CartControl } from "./cart-control"
import { useFilter } from "@/hooks/useFilter"
import { styled } from "styled-components"

const HeaderTag = styled.header `
    height: 80px;
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
                            placeholder="O que você precisa?"/>
                    <CartControl/>
                </div>
            </Container>
        </HeaderTag>
    )
}