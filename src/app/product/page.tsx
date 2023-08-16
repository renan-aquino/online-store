'use client'

import { GoBackButton } from "@/components/go-back-button"
import { CartContext } from "@/contexts/cart-context"
import { useProduct } from "@/hooks/useProduct"
import { useContext } from "react"
import { styled } from "styled-components"
import Image from 'next/image'
import { formatPrice } from "../utils/format-price"
import { useProducts } from "@/hooks/useProducts"


const Container = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 32px;
    margin-top: 24px;
    width: 100%;
`

const ProductImage = styled(Image)`
    width: 100%;
    height: auto;
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

    button {
        margin-top: 32px;
        background: #115D8C;
        border-radius: 4px;
        color: white;
        padding: 10px 10px;
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        text-transform: uppercase;
    }
`

export default function Product({ searchParams }: { searchParams: { id: string }}){
    const { cartItems, setCartItems } = useContext(CartContext)
    // const { data } = useProduct(searchParams.id)

    const { data } = useProducts()

    let filteredData = data

    filteredData = filteredData?.filter(product => product.id == searchParams.id)

    let filteredDataItem = filteredData?.filter(product => product.id == searchParams.id).at(0)

    const price = formatPrice(filteredDataItem?.price_in_cents)

    // const price = formatPrice(data?.price_in_cents)


    const handleAddToCart = () => {

            let existingProductIndex = cartItems.findIndex((item: { id: string; }) => item.id === searchParams.id);

            if(existingProductIndex != -1){
                cartItems[existingProductIndex].quantity += 1;
                localStorage.setItem('cart-items', JSON.stringify(cartItems))
                setCartItems(JSON.parse(localStorage.getItem('cart-items')))

            } else {
                let currentProduct = { ...filteredDataItem, quantity: 1}
                setCartItems(prev => [...prev, currentProduct])
            }
    
    }

    return(
        <main>
            <GoBackButton navigate="/"/>
            <Container>
                    <ProductImage src={filteredDataItem?.image} alt="" width={500} height={500}/>
                    <div>
                        <ProductInfo>
                            <span>{filteredDataItem?.category}</span>
                            <h2>{filteredDataItem?.title}</h2>
                            <span>{price}</span>
                            <div>
                                <h3>Descrição</h3>
                                <p>{filteredDataItem?.description}</p>
                            </div>
                            <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
                        </ProductInfo>
                    </div>
            </Container>
        </main>


    )
}