import Hero from "./Hero.tsx";
import ProductList from "./ProductList.tsx";

const Products = () => {
    return (
        <div className={'bg-secondary-bg'}>
            <Hero/>
            <ProductList/>
        </div>
    );
};

export default Products;