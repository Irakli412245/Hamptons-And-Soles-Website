import React, { useMemo } from "react";
import ProductItem from "./ProductItem.tsx";
import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";
import {useQuery} from "@tanstack/react-query";

import {getAllProducts} from "../../../lib/api.ts";

export interface IProduct {
    id: number;
    category: string;
    description: string;
    imageUrl: string;
    price: string;
    productName: string;
}

interface IProps {
    selectedCategory: string | null;
    onCategoryChange: (category: string | null) => void;
}

const ProductList: React.FC<IProps> = ({ selectedCategory, onCategoryChange }) => {
    const {width} = useWindowDimensions();
    const isMobile = width < 768;

    const { data: products, error, isLoading } = useQuery<IProduct[]>({
        queryKey: ['products'],
        queryFn: getAllProducts,
    });

    const categories = useMemo(() => {
        if (!products) return [];
        return Array.from(new Set(products.map(product => product.category)));
    }, [products]);

    const filteredProducts = useMemo(() => {
        if (!products) return [];
        if (!selectedCategory) return products;
        return products.filter(product => product.category === selectedCategory);
    }, [products, selectedCategory]);

    if (error) {
        return <div className={'flex justify-center items-center h-screen'}>Error: {error.message}</div>
    }

    if (isLoading) {
        return <div className={'flex justify-center items-center h-screen'}>Loading...</div>
    }

    return (
        <div className={'flex flex-col px-[30px] py-[60px] table:px-[100px] table:py-[80px]'}>
            <div className={'flex flex-col gap-10'}>
                <div className={'flex justify-center w-full'}>
                    <div className={'flex flex-wrap gap-6 justify-center max-w-full'}>
                        <button
                            onClick={() => onCategoryChange(null)}
                            className={`relative font-seasons font-normal text-[18px] table:text-[22px] leading-[120%] table:leading-[130%] uppercase text-center transition-all duration-300 ${
                                selectedCategory === null 
                                    ? 'text-primary-cl after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary-cl after:opacity-100' 
                                    : 'text-primary-cl/50 hover:text-primary-cl/70 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary-cl after:opacity-0 hover:after:opacity-50'
                            }`}
                        >
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => onCategoryChange(category)}
                                className={`relative font-seasons font-normal text-[18px] table:text-[22px] leading-[120%] table:leading-[130%] uppercase text-center transition-all duration-300 ${
                                    selectedCategory === category 
                                        ? 'text-primary-cl after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary-cl after:opacity-100' 
                                        : 'text-primary-cl/50 hover:text-primary-cl/70 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary-cl after:opacity-0 hover:after:opacity-50'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            
            <ul className={'grid grid-cols-2 gap-3 table:grid-cols-3 table:gap-6 mt-[60px] table:mt-[80px]'}>
                {filteredProducts.map(product => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;