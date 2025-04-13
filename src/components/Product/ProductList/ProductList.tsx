import ProductItem from "./ProductItem.tsx";
import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";

import productsData from '../../../db/products.json'

type HowToUseArray = string[][];

export interface IProduct {
    id: number;
    code: string;
    category: string;
    title: string;
    description: string;
    howToUse: HowToUseArray;
    details: {
        brand: string;
        size: string;
        color: string;
        madeIn: string;
    };
    imageUrl: string;
}

const ProductList = () => {
    const {width} = useWindowDimensions();
    const isMobile= width < 768;

    return (
        <div
            className={'flex flex-col px-[30px] py-[60px] table:px-[100px] table:py-[80px]'}
        >
            <div className={'flex gap-10 justify-center items-center w-full  mb-[60px] table:mb-[80px] '}>
                { !isMobile && <div className={'w-full h-[0.5px] bg-primary-cl'}></div>}
                <h2
                    className={'table:min-w-[320px] font-seasons font-normal text-[36px] leading-[100%] uppercase text-center table:text-[40px] table:leading-[150%]'}
                >
                    Suede Care
                </h2>
                { !isMobile && <div className={'w-full h-[0.5px] bg-primary-cl'}></div>}
            </div>
            <ul className={'grid grid-cols-2 gap-3 table:grid-cols-3 table:gap-6'}>
                {
                    productsData.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default ProductList;