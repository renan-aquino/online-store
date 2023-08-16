'use client'

import { CartIcon } from './icons/cart-icon'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '@/contexts/cart-context'
import { useRouter } from 'next/navigation'
import { styled } from 'styled-components'


const Container = styled.div `
    position: relative;
    cursor: pointer;
`

const CartCount = styled.span `
    padding: 2px 6px;
    border-radius: 100%;
    font-size: 12px;

    background-color: #DE3838;
    
    color: white;
    margin-left: -10px;
`


export function CartControl(){
    const router = useRouter();
    const { cartItems } = useContext(CartContext)
    let totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    console.log(totalQuantity)

    useEffect(() => {
        totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0) 
    }, [cartItems])
    
    const handleNavigate = () => {
        router.push("/cart")
    }

    return(
        <Container onClick={handleNavigate}>
            <CartIcon/>
            {totalQuantity > 0 && <CartCount>{totalQuantity}</CartCount>}
        </Container>
    )
}