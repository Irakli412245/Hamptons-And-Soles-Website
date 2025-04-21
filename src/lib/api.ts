import {supabase} from "./supabaseClient.ts";
import {IProduct} from "../components/Product/ProductList/ProductList.tsx";

export const getAllProducts = async (): Promise<IProduct[]> => {
    const { data, error } = await supabase
        .from('products')
        .select('*');

    if (error) {
        console.error('Error fetching products:', error);
        return [];
    }

    console.log('Products with details and info:', data);
    return data;
};
