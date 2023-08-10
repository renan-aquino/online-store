import { ProductsFetchResponse } from "@/types/products-reponse";
import { useQuery } from "@tanstack/react-query";
import axios, {AxiosPromise} from "axios";
import { useFilter } from "./useFilter";
import { getCategory } from "@/app/utils/get-category";
import { PriorityType } from "@/types/priority-types";
import { FilterType } from "@/types/filter-types";

const API_URL = 'https://jsontest.vercel.app/'

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
    const response = axios.get<ProductsFetchResponse>(API_URL);
    return response;
}

export function useProducts(){
    const { type, priority } = useFilter()

    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['products-data']
    })

    let filteredData = data?.data?.products


    switch(priority){
        case PriorityType.RELEASE_DATE:
            filteredData = filteredData?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
            break;
        
        case PriorityType.LOWEST_PRICE:
            filteredData = filteredData?.sort((a, b) => a.price_in_cents - b.price_in_cents);
            break;
        
        case PriorityType.HIGHEST_PRICE:
            filteredData = filteredData?.sort((a, b) => b.price_in_cents - a.price_in_cents);
            break;    
    }

    if(type != FilterType.ALL){
      filteredData = filteredData?.filter(product => product.category == getCategory(type));
    }


    return {
        data: filteredData
    }

    // return {
    //     data: data?.data?.products
    // }
}