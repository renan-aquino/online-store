export interface Product {
    category: string,
    id: string,
    title: string,
    description: string,
    price_in_cents: number,
    image: string,
    date: string
}

export interface ProductInCart extends Product {
    quantity: number
}

export interface ProductFetchResponse {
    product: Product
}