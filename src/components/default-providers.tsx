"use client"

import { CartContextProvider } from "@/contexts/cart-context";
import { FilterContextProvider } from "@/contexts/filter-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface DefaultProvidersProps {
    children: ReactNode
}



export function DefaultProviders({ children } : DefaultProvidersProps){
    const client = new QueryClient();
    return(
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <CartContextProvider>
                    {children}
                </CartContextProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    )
}