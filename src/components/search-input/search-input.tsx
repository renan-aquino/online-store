import { styled } from "styled-components"
import { InputHTMLAttributes } from "react"
import { SearchIcon } from "../icons/search-icon"
import s from './search-input.module.css'


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    // value: string,
    // handlechange: (value: string) => void
}

export function InputSearchIcon(props: InputProps){
    return(
        <div className={s.input_Container}>
            <input className={s.search_input} {...props}/>
            <SearchIcon/>
        </div>
    )
}