'use client'

import { GoBackButton } from "@/components/go-back-button";
import { CartContext } from "@/contexts/cart-context";
import { useContext } from "react";
import { styled } from "styled-components";
import { formatPrice } from "../utils/format-price";
import { CartItemCard } from "@/components/cart-item-card";
import { Order } from "@/components/Order";
import { Product, ProductInCart } from "@/types/product";

const Container = styled.div `
    margin-top: 24px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    > p {
        margin-top: 12px;
    }
`

const FlexContainer = styled.div `
    margin-top: 24px;
    display: flex;
    justify-content: center;
    gap: 40px;
`

const CartList = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

`




export default function CartPage(){
    const { cartItems, setCartItems } = useContext(CartContext)
    
    let totalQuantity = cartItems.reduce((sum, item) => sum += item.quantity, 0)
    let totalAmount = cartItems.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
    let subtotal = formatPrice(totalAmount)
    let total = formatPrice(totalAmount + 14.90)

    const IncreaseNumber = (currentItem: ProductInCart) => {
        currentItem.quantity += 1
        localStorage.setItem('cart-items', JSON.stringify(cartItems))
        setCartItems(JSON.parse(localStorage.getItem('cart-items')))
    }
    
    const DecreaseNumber = (currentItem: ProductInCart) => {
        if(currentItem.quantity > 1) {
            currentItem.quantity -= 1
            localStorage.setItem('cart-items', JSON.stringify(cartItems))
            setCartItems(JSON.parse(localStorage.getItem('cart-items')))
        }
    }

    return (
        <main>
            <GoBackButton navigate="/"/>
            <Container>
                <h3>Your cart</h3>
                <p><span>&#40;{totalQuantity} items&#41;</span></p>
                <FlexContainer>  
                    <CartList>
                        {cartItems.map(item =>
                            <CartItemCard handleIncrease={() => IncreaseNumber(item)} handleDecrease={() => DecreaseNumber(item)} image={item.image} title={item.title} quantity={item.quantity} price={formatPrice(item.quantity * item.price_in_cents)} key={item.id}/>
                        )}
                    </CartList>
                    <Order subtotal={subtotal} total={total}/>
                </FlexContainer>

            </Container>

        </main>
    )
}