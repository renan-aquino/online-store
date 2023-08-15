import { styled } from "styled-components"
import { InputHTMLAttributes } from "react"
import { SearchIcon } from "../icons/search-icon"

const SearchInput = styled.input `
    border-radius: 8px;
    border: none;
    width: 352px;
    background-color: #F3F5F6;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    font-family: inherit;
    color: #737380;
`

const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    value: string,
    handleChange: (value: string) => void
}

export function InputSearchIcon(props: InputProps){
    return(
        <InputContainer>
            <SearchInput onChange={(e) => props.handleChange(e.target.value)} {...props}/>
            <SearchIcon/>
        </InputContainer>
    )
}