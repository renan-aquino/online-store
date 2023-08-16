
import { ProductsFetchResponse } from "@/types/products-reponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";


const API_URL = 'https://jsontest.vercel.app/'

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
    const response = axios.get<ProductsFetchResponse>(API_URL);
    return response;
}


export function useProduct(id: string){
    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['products-data', id],
        enabled: !!id,
        staleTime: 1000 * 60 * 5
    })


    let filteredData = data?.data.products

    filteredData = filteredData?.filter(product => product.id == id)

    let filteredDataItem = filteredData?.filter(product => product.id == id).at(0)

    return {
        data: filteredDataItem
    }
}