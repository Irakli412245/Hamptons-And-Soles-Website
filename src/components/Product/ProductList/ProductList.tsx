import ProductItem from "./ProductItem.tsx";
import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";

export interface IProduct {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    howToUse: {
        [key: string]: string;
    },
    details: {
        [key: string]: string;
    },
}


const products: IProduct[] = [
    {
        id: 1,
        title: 'Saphir omniDaim + brush',
        description: 'Saphir Omni Daim is a high-quality suede and nubuck cleaning and conditioning product designed to effectively clean and restore the appearance of suede items. Using Saphir Omni Daim regularly will help keep your suede items clean, conditioned, and looking their best.',
        howToUse: {
            'Prepare the Surface': 'Use a soft brush to remove any loose dirt or debris.',
            'Test the Product': 'It’s advisable to test the Omni Daim on a small, inconspicuous area first to ensure it doesn’t alter the color or texture of the suede.',
            'Apply the Product': 'Shake the bottle well before use.',
            'Gently Work the Product': 'Use a soft cloth or sponge to gently rub the product into the suede.',
            'Allow to Dry': 'Let the suede dry naturally at room temperature. Avoid using heat sources to dry the material.',
            'Brush the Suede': 'Once dry, use a soft suede brush to restore the nap and texture of the suede.',
        },
        details: {
            brand: 'Saphir',
            size: '100 ml Bottle + brush',
            color: 'Colourless',
            madeIn: 'Made in France'
        },
        imageUrl: 'https://fmhxpytymrzuzawgqelc.supabase.co/storage/v1/object/public/images//Saphir-omniDaim+brush.png'
    },
    {
        id: 2,
        title: 'Saphir omniDaim + brush',
        description: 'Saphir Omni Daim is a high-quality suede and nubuck cleaning and conditioning product designed to effectively clean and restore the appearance of suede items. Using Saphir Omni Daim regularly will help keep your suede items clean, conditioned, and looking their best.',
        howToUse: {
            'Prepare the Surface': 'Use a soft brush to remove any loose dirt or debris.',
            'Test the Product': 'It’s advisable to test the Omni Daim on a small, inconspicuous area first to ensure it doesn’t alter the color or texture of the suede.',
            'Apply the Product': 'Shake the bottle well before use.',
            'Gently Work the Product': 'Use a soft cloth or sponge to gently rub the product into the suede.',
            'Allow to Dry': 'Let the suede dry naturally at room temperature. Avoid using heat sources to dry the material.',
            'Brush the Suede': 'Once dry, use a soft suede brush to restore the nap and texture of the suede.',
        },
        details: {
            brand: 'Saphir',
            size: '100 ml Bottle + brush',
            color: 'Colourless',
            madeIn: 'Made in France'
        },
        imageUrl: 'https://fmhxpytymrzuzawgqelc.supabase.co/storage/v1/object/public/images//Saphir-omniDaim+brush.png'
    },
    {
        id: 3,
        title: 'Saphir omniDaim + brush',
        description: 'Saphir Omni Daim is a high-quality suede and nubuck cleaning and conditioning product designed to effectively clean and restore the appearance of suede items. Using Saphir Omni Daim regularly will help keep your suede items clean, conditioned, and looking their best.',
        howToUse: {
            'Prepare the Surface': 'Use a soft brush to remove any loose dirt or debris.',
            'Test the Product': 'It’s advisable to test the Omni Daim on a small, inconspicuous area first to ensure it doesn’t alter the color or texture of the suede.',
            'Apply the Product': 'Shake the bottle well before use.',
            'Gently Work the Product': 'Use a soft cloth or sponge to gently rub the product into the suede.',
            'Allow to Dry': 'Let the suede dry naturally at room temperature. Avoid using heat sources to dry the material.',
            'Brush the Suede': 'Once dry, use a soft suede brush to restore the nap and texture of the suede.',
        },
        details: {
            brand: 'Saphir',
            size: '100 ml Bottle + brush',
            color: 'Colourless',
            madeIn: 'Made in France'
        },
        imageUrl: 'https://fmhxpytymrzuzawgqelc.supabase.co/storage/v1/object/public/images//Saphir-omniDaim+brush.png'
    },
]

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
                    products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default ProductList;