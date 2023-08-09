'use client'

import { useProducts } from "@/hooks/useProducts"

export function ProductList(){
    const { data } = useProducts();
    console.log(data)
    return(
        <></>
    )
}