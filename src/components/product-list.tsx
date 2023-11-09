'use client'

import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card";
import { styled } from "styled-components";


const Container = styled.div `
    display: grid;
    align-content: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    max-width: 100%;
    margin-top: 32px;

    @media (max-width: 917px) {
        grid-template-columns: repeat(3, 1fr);  
    }

    @media (max-width: 685px) {
        grid-template-columns: repeat(2, 1fr);  
    }

    @media (max-width: 455px) {
        grid-template-columns: repeat(1, 1fr);  
    }
`


export function ProductList(){
    const { data } = useProducts();
    return(
        <Container>
            {data?.map(product => 
                 <ProductCard key={product.id} id={product.id} title={product.title} price={product.price_in_cents} image={product.image}/> )}
        </Container>
    )
}