'use client'

import s from './cart-control.module.css'
import { CartIcon } from '../icons/cart-icon'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '@/contexts/cart-context'


export function CartControl(){
    const { cartItems } = useContext(CartContext)
    let totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    console.log(totalQuantity)

    useEffect(() => {
        totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0) 
    }, [cartItems])
    
    return(
        <div className={s.container}>
            <CartIcon/>
            {totalQuantity > 0 && <span className={s.cart_count}>{totalQuantity}</span>}
        </div>
    )
}