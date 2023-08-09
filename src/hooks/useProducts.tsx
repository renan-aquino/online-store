import { ProductsFetchResponse } from "@/types/products-reponse";
import { useQuery } from "@tanstack/react-query";
import axios, {AxiosPromise} from "axios";

const API_URL = 'https://jsontest.vercel.app/'

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
    const response = axios.get<ProductsFetchResponse>(API_URL);
    return response;
}

export function useProducts(){
    const { data } = useQuery({
        queryFn: fetcher,
        queryKey: ['products-data']
    })

    return {
        data: data?.data?.products
    }
}