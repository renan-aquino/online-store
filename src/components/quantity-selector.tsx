import { styled } from "styled-components"
import {ReactNode} from 'react'

const Container = styled.div `
    width: 100px;
    height: 32px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;

    button {
        width: 32px;
        height: 32px;
        background-color: black;
        color: white;
        font-size: 24px;
        line-height: 1.1;
        border-radius: 5px;
    }

    p {
        color: black;
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
            <button onClick={props.handleDecrease}>-</button>
            <p> {props.quantity} </p>
            <button onClick={props.handleIncrease}>+</button>
        </Container>
    )
}