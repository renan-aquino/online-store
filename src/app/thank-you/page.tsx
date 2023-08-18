'use client'

import { useRouter } from "next/navigation"
import { styled } from "styled-components"

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 48px;
    color: white;
    background-color: green;
`



export default function ThankYou(){
    const router = useRouter()

    return (
        <main>
            <h3>Thank you for your purchase!</h3>
            <Button onClick={() => router.push('/')}>Keep shopping</Button>
        </main>
    )
}