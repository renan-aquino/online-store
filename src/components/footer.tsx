'use client'

import { styled } from "styled-components"

const Container = styled.div`
    background-color: #1c1c1c;
    height: 140px;
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    a {
        color: (internal value);
        text-decoration: underline;
        cursor: pointer;
    }
`

export function Footer(){
    return(
        <Container>
            <p>This website was built for portfolio purposes and does not portray a real shop. Check the GitHub repository <a href="https://online-store-blond.vercel.app/" target="_blank">here.</a></p>
            <p>The photos used throughout the page were provided by <a href="https://www.freepik.com/" target="_blank">Freepik</a> and <a href="https://unsplash.com/" target="_blank">Unsplashed</a>.</p>
        </Container>
    )
}