import React, { useState } from "react";
import Hero from "./Hero.tsx";
import ProductList from "./ProductList.tsx";

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return (
        <div className={'bg-secondary-bg'}>
            <Hero/>
            <ProductList selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        </div>
    );
};

export default Products;