'use client'

import { styled } from "styled-components"
import { InputSearchIcon } from "./search-input"
import { CartControl } from "./cart-control"

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`

const Logo = styled.a `
    color: black;
    font-size: 32px;

    span {
        color: #EF5600;
        font-weight: 500;
    }
    
`

export function Header(){ 
    return(
        <header>
            <TagHeader>
                <Logo>Online<span> Store</span></Logo>
                <div>
                    <InputSearchIcon placeholder="O que você precisa?"/>
                    <CartControl/>
                </div>
            </TagHeader>
        </header>
    )
}