import { styled } from "styled-components"
import {ReactNode} from 'react'

const Container = styled.div `
    display: flex;
    align-items: center;
    gap: 10px;

    button {
        padding : 2px 8px;
        background-color: black;
        color: white;
        font-size: 24px;
        border-radius: 10px;
    }

    p {
        color: black;
        margin-top: 0px;
    }
`

interface QuantitySelectorProps {
    quantity: number,
    handleIncrease: () => void
    handleDecrease: () => void
}



export function QuantitySelector(props: QuantitySelectorProps){
    return (
        <Container>
            <button onClick={props.handleDecrease}>+</button>
            <p>{props.quantity}</p>
            <button onClick={props.handleIncrease}>+</button>
        </Container>
    )
}