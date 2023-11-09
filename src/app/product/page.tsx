'use client'

import { GoBackButton } from "@/components/go-back-button"
import { CartContext } from "@/contexts/cart-context"
import { useProduct } from "@/hooks/useProduct"
import { useContext, useRef } from "react"
import { styled } from "styled-components"
// import Image from 'next/image'
import { formatPrice } from "../utils/format-price"


const Container = styled.div`
    // display: grid;
    // grid-template-columns: 1.5fr 1fr;
    // gap: 32px;
    margin-top: 24px;
    max-width: 1200px;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    gap: 32px;

    
    img {
        width: 700px;
        // height: calc(100vh - 24px - 80px - 34px - 24px);
        aspect-ratio: 1;
    }

    > div {
        max-width: 600px;
    }

    @media(max-width: 768px){
        flex-direction: column;

        div {
            order: 2;
        }

        img {
            align-self: center;
            order: 1;
            width: 100%;
        }
    }
`

const ProductInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    span {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: var(--clr-dark-300);
    }

    h2 {
        font-weight: 300;
        font-size: 32px;
        line-height: 150%;
        color: var(--clr-dark-300);
        margin-top: 12px;
    }

    span:nth-of-type(2){
        font-weight: 600;
        font-size: 20px;
        color: var(--clr-dark-400);
        margin-bottom: 24px;
    }

    p {
        font-weight: 400;
        font-size: 12px;
        color: (--clr-dark-200);
    }

    div {
        margin-top: 24px;

        h3 {
            text-transform: uppercase;
            color: var(--clr-dark-200);
            font-weight: 500;
            font-size: 16px;
        }

        p {
            margin-top: 20px;
            font-size: 16px;
        }

    }

    @media(max-width: 768px){
        h2 {
            font-size: 20px
        }
    }
`
const Button = styled.button `
    margin-top: 48px;
    background: green;
    border-radius: 4px;
    color: white;
    padding: 10px 10px;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;

    &:hover {
        background-color: #0F4E75;
    }

    @media (max-width: 768px){
        margin-top: 20px;
    }
`


export default function Product({ searchParams }: { searchParams: { id: string }}){
    const { cartItems, setCartItems } = useContext(CartContext)
    const { data } = useProduct(searchParams.id)
    const btnRef = useRef(null)
    const price = formatPrice(data?.price_in_cents)

    
    const handleAddToCart = () => {

            let existingProductIndex = cartItems.findIndex((item: { id: string; }) => item.id === searchParams.id);

            if(existingProductIndex != -1){
                cartItems[existingProductIndex].quantity += 1;
                localStorage.setItem('cart-items', JSON.stringify(cartItems))
                setCartItems(JSON.parse(localStorage.getItem('cart-items')))

            } else {
                let currentProduct = { ...data, quantity: 1}
                setCartItems(prev => [...prev, currentProduct])
            }

            btnRef.current.disabled = true
            btnRef.current.style.backgroundColor = '#70A6C8'
            btnRef.current.innerHTML = "ITEM ADDED TO CART"
    
    }

    return(
        <main>
            <GoBackButton navigate="/"/>
            <Container>                    
                    <div>
                        <ProductInfo>
                            <h2>{data?.title}</h2>
                            <span>{price}</span>
                            <div>
                                <h3>Description</h3>
                                <p>{data?.description}</p>
                            </div>
                            <Button ref={btnRef} onClick={handleAddToCart}>Add to cart</Button>
                        </ProductInfo>
                    </div>
                    <img src={data?.image}/>

            </Container>
        </main>


    )
}