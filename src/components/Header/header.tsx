'use client'

import { InputSearchIcon } from "../search-input/search-input"
import { CartControl } from "../cart-control/cart-control"
import { useFilter } from "@/hooks/useFilter"
import s from './header.module.css'


export function Header(){ 
    const { search, setSearch } = useFilter();
    return(
        <header>
            <header>
                <a href="/">Online<span className={s.accent}> Store</span></a>
                <div>
                    <InputSearchIcon 
                        // value={search}
                        // handlechange={setSearch}
                        placeholder="O que você precisa?"/>
                    <CartControl/>
                </div>
            </header>
        </header>
    )
}