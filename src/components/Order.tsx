import { styled } from "styled-components"

const Container = styled.div `
    background-color: white;
    width: 400px;
    padding: 32px;

    h3 {
        color: var(--clr-dark-300);
        font-size: 20px;
    }
    
    p {
        font-weight: 500;
    }
`

const Subtotal = styled.div `
    margin-top: 32px;

    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    div + div {
        margin-top: 12px;
    }
    
`

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: var(--clr-dark-300);
    margin-top: 12px;
`

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--clr-dark-100);
    margin-top: 20px;
`

interface OrderProps {
    subtotal: string,
    total: string
}
export function Order(props: OrderProps){
    return(
        <Container>
            <h3>Order Information</h3>

            <Subtotal>
                <div>
                    <p>Subtotal</p>
                    <p>{props.subtotal}</p>
                </div>
                <div>
                    <p>Shipping fee</p>
                    <p>R$ 14,90</p>
                </div>
            </Subtotal>

            <Divider/>

            <Total>
                <p>Total</p>
                <p>{props.total}</p>
            </Total>
        </Container>
    )
}