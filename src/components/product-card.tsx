'use client'

import { formatPrice } from "@/app/utils/format-price"
import { useRouter } from "next/navigation"
import { styled } from "styled-components"
// import Image from 'next/image'

interface ProductCardProps{
    id: string,
    image: string,
    title: string,
    price: number
}



const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 0px 0px 4px 4px;

    width: 100%;
    height: auto;

    img {
        width: 100%;
        height: auto;
        aspect-ratio: 1;
        object-fit: cover;
    }

    div {
        display: flex;
        align-items: start;
        justify-content: space-between;
        padding: 12px 12px 0px 12px;
        width: 100%;
        height: 75px;
    }

    h3 {
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: var(--clr-dark-300);
        max-width: 50%;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }

    p {
        font-weight: 600;
        font-size: 17px;
        line-height: 150%;
        color: var(--clr-dark-300);
        max-width: 50%;
    }

`

// const ProductImage = styled(Image) `
//     width: 100%;
//     height: auto;
//     aspect-ratio: 1;
//     object-fit: cover;
// `

export function ProductCard(props: ProductCardProps){

    const price = formatPrice(props.price)
    const router = useRouter();

    const handleNavigate = () => {
        router.push("/product?id=" + props.id)
    }
    
    return(
        <Card onClick={handleNavigate}>
            <img src={props.image}/>
            <div>
                <h3>{props.title}</h3>
                <p>{price}</p>
            </div>
        </Card>
    )
}