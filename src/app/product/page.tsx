'use client'

import { GoBackButton } from "@/components/go-back-button/go-back-button"
import { CartContext } from "@/contexts/cart-context"
import { useProduct } from "@/hooks/useProduct"
import { useContext } from "react"
import { styled } from "styled-components"


const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    section {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 32px;
        margin-top: 24px;

        img {
            max-width: 640px;
            width: 50%;
        }
        
        > div {
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            button {
                background: #115D8C;
                mix-blend-mode: multiply;
                border-radius: 4px;
                color: white;
                border: none;
                cursor: pointer;
                padding: 10px 0;
                text-align: center;
                font-weight: 500;
                font-size: 16px;
                text-transform: uppercase;

                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }
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
            font-size: 14px;
        }
    }
`

export default function Product({ searchParams }: { searchParams: { id: string }}){
    const { cartItems, setCartItems } = useContext(CartContext)
    const { data } = useProduct(searchParams.id)


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
    
    }

    return(

            <main>
                <Container>
                    <GoBackButton navigate="/"/>
                    <section>
                        <img src={data?.image} alt="" />
                        <div>
                            <ProductInfo>
                                <span>{data?.category}</span>
                                <h2>{data?.title}</h2>
                                <span>{data?.price_in_cents}</span>
                                <div>
                                    <h3>Descrição</h3>
                                    <p>{data?.description}</p>
                                </div>
                            </ProductInfo>
                        </div>
                        <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
                        
                    </section>
                </Container>
            </main>


    )
}