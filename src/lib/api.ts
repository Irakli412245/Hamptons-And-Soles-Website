import {supabase} from "./supabaseClient.ts";

export const getAllProducts = async () => {
    const {data, error} = await supabase
        .from('products')
        .select('*');

    if (error) {
        console.error('Error fetching products:', error);
    } else {
        console.log('Products:', data);
    }
}