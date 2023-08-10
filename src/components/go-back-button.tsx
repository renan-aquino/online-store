'use client'

import { styled } from "styled-components";
import { GoBackIcon } from "./icons/go-back-icon";
import { useRouter } from "next/navigation";

const Button = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: var(--clr-dark-100)

`

interface BtnProps{
    navigate: string;
}

export function GoBackButton({navigate} : BtnProps){
    
    const router = useRouter();

    const handleNavigate = () => {
        router.push(navigate)
    }

    return(
        <Button onClick={handleNavigate}>
            <GoBackIcon/>
            Go back
        </Button>
    )
}