'use client'

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "../product-card/product-card";
import s from './product-list.module.css'

export function ProductList(){
    const { data } = useProducts();
    return(
        <div className={s.container}>
            {data?.map(product => 
                 <ProductCard key={product.id} id={product.id} title={product.title} price={product.price_in_cents} image={product.image}/> )}
        </div>
    )
}