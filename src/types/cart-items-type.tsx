import { ProductInCart } from "./product"

export type CartContextType = {
    cartItems: ProductInCart[];
    setCartItems: React.Dispatch<React.SetStateAction<ProductInCart[]>>;
}