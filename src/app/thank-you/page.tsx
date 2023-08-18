'use client'

import { useRouter } from "next/navigation"
import { styled } from "styled-components"

const Container = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 150px;
`

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 48px;
    color: white;
    background-color: green;
    font-size: 16px;
    font-weight: 500;
    font-family: inherit;

    &:active {
        background-color: #006E00;
    }
`



export default function ThankYou(){
    const router = useRouter()

    return (
        <main>
            <Container>
                <h2>Thank you for your purchase!</h2>
                <Button onClick={() => router.push('/')}>Keep shopping</Button>
            </Container>
        </main>
    )
}