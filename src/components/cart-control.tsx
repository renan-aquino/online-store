'use client'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CartIcon } from './cart-icon'
import { styled } from "styled-components"

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    // text-align: center;
    padding: 2px 6px;
    border-radius: 100%;
    font-size: 12px;

    background-color: #DE3838;
    
    color: white;
    margin-left: -10px;
    
`

const Container = styled.div `
    position: relative;
`

export function CartControl(){
    const { value } = useLocalStorage('cart-items', [])
    
    return(
        <Container>
            <CartIcon/>
            {value.length && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}