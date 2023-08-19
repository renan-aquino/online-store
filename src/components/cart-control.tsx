'use client'

import { CartIcon } from './icons/cart-icon'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '@/contexts/cart-context'
import { useRouter } from 'next/navigation'
import { styled } from 'styled-components'
import { spawn } from 'child_process'


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

const Message = styled.div `
    width: 156px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4p;
    padding: 12px 16px;

    position: absolute;
    top: 100%;
    right: 0;
    z-index: 1;

`



export function CartControl(){
    const router = useRouter();
    const [clicked, setClicked] = useState(false)
    const { cartItems } = useContext(CartContext)
    let totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    useEffect(() => {
        totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0) 
    }, [cartItems])

    const displayMessage = async () => {
        setClicked(true)
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setClicked(false)
    }
    
    const handleNavigate = () => {
        if(cartItems.length > 0) {
            router.push("/cart")
        }
        else {
            displayMessage()            
        }
    }

    return(
        <Container onClick={handleNavigate}>
            <CartIcon/>
            {totalQuantity > 0 && <CartCount>{totalQuantity}</CartCount>}
            {clicked && <Message>No items in your cart.</Message>}
        </Container>
    )
}