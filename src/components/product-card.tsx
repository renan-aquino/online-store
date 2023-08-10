import { formatPrice } from "@/app/utils/format-price"
import { styled } from "styled-components"

interface ProductCardProps{
    image: string,
    title: string,
    price: number
}

const Card = styled.div `
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 0px 0px 4px 4px;

    width: 256px;

    img {
        width: 256px;
        height: 300px;
    }

    h3 {
        font-weigth: 300;
        font-size: 16px;
        line-height: 150%;
        color: #41414D;
    }

    p {
        font-weight: 600;
        color: #090904;
        font-size: 14px;
        line-height: 150%;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        padding: 8px 12px;

        > div {
           width: 228px;
           height: 1px;
           margin: 8px 0;
           padding: 0;
           background: var(--clr-dark); 
        }
    }
`



export function ProductCard(props: ProductCardProps){

    const price = formatPrice(props.price)
    
    return(
        <Card>
            <img src={props.image}/>
            <div>
                <h3>{props.title}</h3>
                <div></div>
                <p>{price}</p>
            </div>
        </Card>
    )
}