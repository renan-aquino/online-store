import { CartContextType } from '@/types/cart-items-type';
import { ProductInCart } from '@/types/product';
import { createContext, useState, ReactNode, useEffect } from 'react'

export const CartContext = createContext<CartContextType>({
    cartItems: [],
    setCartItems: () => {},
})

interface ProviderProps {
    children : ReactNode
}

export function CartContextProvider({children} : ProviderProps) {
    const ls = typeof window !== "undefined" ? window.localStorage : null;
    const defaultProducts = ls ? JSON.parse(localStorage.getItem('cart-items')) : [];
    const [cartItems, setCartItems] = useState<ProductInCart[]>([]);

    useEffect(()=> {
        if(cartItems.length > 0){
            localStorage.setItem('cart-items', JSON.stringify(cartItems))
        }
    }, [cartItems])

    useEffect(() => {
        if(ls && localStorage.getItem('cart-items')){
            setCartItems(JSON.parse(localStorage.getItem('cart-items')))
        }
    }, [])


    return (
        <CartContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}