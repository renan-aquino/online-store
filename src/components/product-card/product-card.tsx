'use client'

import { formatPrice } from "@/app/utils/format-price"
import { useRouter } from "next/navigation"
import s from './product-card.module.css'
interface ProductCardProps{
    id: string,
    image: string,
    title: string,
    price: number
}


export function ProductCard(props: ProductCardProps){

    const price = formatPrice(props.price)
    const router = useRouter();

    const handleNavigate = () => {
        router.push("/product?id=" + props.id)
    }
    
    return(
        <div className={s.card} onClick={handleNavigate}>
            <img src={props.image}/>
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </div>
    )
}