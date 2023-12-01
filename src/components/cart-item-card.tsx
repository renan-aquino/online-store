
import { styled } from "styled-components";
import { QuantitySelector } from "./quantity-selector";


const Container = styled.li `
    display: flex;
    align-items: start;
    gap: 24px;
    width: 700px;
    height: 200px;
    background-color: white;

    img {
       width: 200px; 
       height: 200px;
       object-fit: cover;
    }

    @media (max-width: 715px){
        width: clamp(10px, 90vw, 700px);
        height: auto;
        margin-inline: auto;

        img {
            display: none;
        }
    }
`

const ItemInfo = styled.div `
    width: 100%;
    height: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;

    > h3 {
        color: var(--clr-dark-300);
        font-weight: 400;

    }
    
    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 768px){     
        > h3 {
            font-size: 16px;
    
        }
    }
    
`

const Price = styled.p `
    color: black;
    font-weight: 500;
`

interface CartItemProps{
    image: string,
    title: string,
    quantity: number,
    price: string,
    handleIncrease: () => void,
    handleDecrease: () => void
    handleDelete: () => void
}

export function CartItemCard(props: CartItemProps){
    return (
        <Container>
            <img src={props.image}/>
            <ItemInfo>
                <h3>{props.title}</h3>
                <div>
                    <QuantitySelector quantity={props.quantity} handleIncrease={props.handleIncrease} handleDecrease={props.handleDecrease} handleDelete={props.handleDelete}/>
                    <Price>{props.price}</Price>
                </div>
            </ItemInfo>
        </Container>
    )

}