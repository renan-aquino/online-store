import { styled } from "styled-components"
import { TrashIcon } from "./icons/trash-icon"

const Container = styled.div`
    height: 32px;
    display: flex;
    gap: 32px;  
`

const Quantity = styled.div `
    width: 100px;
    height: 100%;
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
const DeleteButton = styled.button `
    width: 32px;
    heigth: 32px;
    border: 2px solid #E75D5D;
    border-radius: 5px;
    cursor: pointer;
    background-color: transparent;
 
`

interface QuantitySelectorProps {
    quantity: number,
    handleIncrease: () => void
    handleDecrease: () => void
    handleDelete: () => void
}



export function QuantitySelector(props: QuantitySelectorProps){
    return (
        <Container>
            <Quantity>
                <button onClick={props.handleDecrease}>-</button>
                <p> {props.quantity} </p>
                <button onClick={props.handleIncrease}>+</button>
            </Quantity>
            <DeleteButton onClick={props.handleDelete}>
                <TrashIcon/>
            </DeleteButton>
        </Container>
    )
}