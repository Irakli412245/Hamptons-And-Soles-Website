import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {IProduct} from "../ProductList/ProductList.tsx";

import productsData from '../../../db/products.json'
import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";


const ProductDetails = () => {
    const {pathname} = useLocation()
    const {width} = useWindowDimensions();
    const [product, setProduct] = useState<IProduct | null>(null);

    const productId = pathname.split('/').pop();
    const isMobile = width < 768;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })

        if (productId) {
            const productFindFirst = productsData.find((item) => item.id === +productId);
            if (productFindFirst) {
                setProduct(productFindFirst)
            } else {
                console.log('Product not found');
            }
        }
    }, [productId])

    return (
        <div className={'bg-secondary-bg'}>
            {!isMobile &&  (
                <div className={'grid grid-cols-3 gap-10 justify-center items-center w-full pt-20 px-[100px]'}>
                    <span className={'block w-full h-[0.5px] bg-primary-cl'}></span>
                    <h2
                        className={'font-seasons font-normal text-[40px] leading-[150%] text-center uppercase'}
                    >
                        {product?.category}
                    </h2>
                    <span className={'block w-full h-[0.5px] bg-primary-cl'}></span>
                </div>
            )}
            <div className={'flex flex-col table:flex-row table:gap-10 table:px-[100px] pt-8 table:pt-20 table:pb-28 '}>
                <div className={' flex flex-col gap-5 table:min-w-[400px]'}>
                    <div
                        className="flex w-full h-[500px] p-7 bg-cover bg-center bg-no-repeat table:border-[0.5px] table:border-primary-cl"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${product?.imageUrl})`
                        }}
                    >
                        {isMobile && (
                            <h2
                                className={'font-seasons font-normal text-[20px] leading-[100%] text-center uppercase'}
                            >
                                {product?.category}
                            </h2>
                        )}
                    </div>
                    {!isMobile && (
                        <button
                            className={'flex justify-center items-center border-primary-cl border-[0.5px] p-4 font-light text-[14px] leading-[120%] uppercase hover:opacity-50'}
                            onClick={() => alert('Product added to cart')}
                        >
                            Add to cart
                        </button>
                    )}
                </div>
                <div className={'px-7 pt-7 pb-14 text-[13px] leading-[120%] table:p-0 '}>
                    <div className={'flex gap-2 mb-10 border-[0.5px] border-primary-cl p-4 uppercase'}>
                        <p className={'flex-1 font-medium'}>
                            / {product?.title}
                        </p>
                        <p className={'font-light'}>
                           Code: {product?.code}
                        </p>
                    </div>
                    <div className={'flex flex-col gap-8'}>
                        <div className={'flex flex-col gap-4'}>
                            <p className={'font-light text-[13px] leading-[120%] uppercase'}>Description</p>
                            <p className={'font-light text-[12px] leading-[140%]'}>{product?.description}</p>
                        </div>
                        <div className={'flex flex-col gap-4'}>
                            <p className={'font-medium text-[13px] leading-[120%] uppercase'}>How to Use:</p>
                            <ul className={'flex flex-col gap-2 pl-4 list-disc text-[12px] leading-[140%] font-light'}>
                                {product?.howToUse?.map((item, index) => (
                                    <li key={index} className={'font-light text-[12px] leading-[140%]'}>
                                        <span className={'font-medium'}>{item[0]}:</span>
                                        {' '}
                                        {item[1]}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={'flex flex-col gap-4'}>
                            <p className={'font-light text-[13px] leading-[120%] uppercase'}>Details</p>
                            <div className={'font-light text-[12px] leading-[140%] uppercase'}>
                                <p className={'font-light text-[12px] leading-[140%]'}>
                                    <span className={'font-medium'}>Brand:</span>
                                    {' '}
                                    {product?.details.brand}
                                </p>
                                <p className={'font-light text-[12px] leading-[140%]'}>
                                    <span className={'font-medium'}>Size:</span>
                                    {' '}
                                    {product?.details.size}
                                </p>
                                <p className={'font-light text-[12px] leading-[140%]'}>
                                    {product?.details.color}
                                </p>
                                <p className={'font-light text-[12px] leading-[140%]'}>
                                    {product?.details.madeIn}
                                </p>
                            </div>
                    </div>
                        {isMobile && (
                            <button
                                className={'flex justify-center items-center border-primary-cl border-[0.5px] p-4 font-light text-[14px] leading-[120%] uppercase hover:opacity-50'}
                                onClick={() => alert('Product added to cart')}
                            >
                                Add to cart
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;