import {IProduct} from "./ProductList.tsx";
import React from "react";
import Icon from "../../UI/Icon.tsx";
import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";
import {useNavigate} from "react-router-dom";

interface IProps {
    product: IProduct;
}

const ProductItem: React.FC<IProps> = ({product}) => {
    const navigate = useNavigate();
    const {width} = useWindowDimensions()
    const isMobile = width <= 768;
    const iconSize = isMobile ? 20 : 30;

    const handleProductClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (target.closest('button')) return;

        navigate(`/products/${product.id}`);
    };

    const handleAddProductToCart = () => {
        console.log('Product added to cart:', product.id);
    }

    // todo add to cart functionality and remove demo text

    return (
        <div className={'relative border-[0.5px] border-primary-cl'} onClick={handleProductClick}>
            <img alt={product.productName} src={product.imageUrl}/>
            <div className={'flex min-h-10 border-t-[0.5px] border-primary-cl'}>
                <p
                    className={'flex-1 p-2.5 font-light text-[9px] leading-[110%] table:font-medium table:text-[14px] table:leading-[130%] table:uppercase'}
                >
                    {product.productName}
                </p>
                <button
                    className={'flex justify-center items-center p-2.5 border-l-[0.5px] border-primary-cl'}
                    onClick={handleAddProductToCart}
                >
                    <Icon id={'plus'} width={iconSize} height={iconSize} className={'hover:opacity-50'}/>
                </button>
            </div>
        </div>
    );
};

export default ProductItem;