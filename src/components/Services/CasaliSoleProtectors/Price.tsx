import React from "react";

import Card from "./components/Card.tsx";
import CardText from "./components/CardText.tsx";

interface IMobileCardProps {
    title: string;
    price: string;
    imageUrl: string;
    children: React.ReactNode;
}

const MobileCard: React.FC<IMobileCardProps> = ({title, price, children, imageUrl}) => {
    return (
            <div className={'border-[0.5px] border-primary-cl'}>
                <div
                    className={'min-w-80 min-h-48 p-6'}
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        filter: 'brightness(0.9)',
                    }}
                >
                    <ul className={'flex justify-between gap-8'}>
                        <li className={'min-w-40'}>
                            <CardText className={''} type={'uppercase'} >
                                {title}
                            </CardText>
                        </li>
                        <li className={'min-w-[100px]'}>
                            <CardText className={''} type={'accent-uppercase'}>
                                *Service Price:
                            </CardText>
                            <CardText className={''} type={'uppercase'}>
                                {price} gel
                            </CardText>
                        </li>
                    </ul>
                </div>
                <div className={'flex flex-col gap-4 p-7'}>
                    {children}
                </div>
            </div>
    )
}

const Price = () => {
    return (
        <Card className={'gap-7 pt-[60px]'}>
            <MobileCard
            title={'/ Sole Protector Casali Mirror'}
            price={'100-120'}
            imageUrl={'/images/services/casaliSoleProtectors/bg-price-mobile-1.png'}
            >
               <>
                   <CardText type={'normal'} className={''}>
                       Our Sole Binding Service includes the application of the Casali Mirror Sole Protector — a premium,
                       high-gloss protective sole (excluding the heel) that is specifically designed to preserve the
                       appearance and integrity of luxury shoes.
                   </CardText>
                   <CardText type={'normal'} className={''}>
                       You can choose from 15 different colors of protective soles, carefully matched to the original
                       colors of luxury designer shoe soles, ensuring your footwear retains its elegance while being
                       fully protected.
                   </CardText>
               </>
            </MobileCard>
            <MobileCard
                title={'/ Sole Protector Casali Silk'}
                price={'100-120'}
                imageUrl={'/images/services/casaliSoleProtectors/bg-price-mobile-2.png'}
            >
                <>
                    <CardText type={'normal'} className={''}>
                        Our Sole Binding Service includes the application of the Casali Silk Sole Protector—a premium,
                        high-quality sole (excluding the heel) specifically designed to preserve both the appearance and
                        structural integrity of luxury shoes.
                    </CardText>
                    <CardText type={'normal'} className={''}>
                        You can choose from 12 different colors of protective soles, carefully matched to the original
                        colors of luxury designer shoe soles, ensuring your footwear retains its elegance while being
                        fully protected.
                    </CardText>
                </>
            </MobileCard>
            <MobileCard
                title={'/ Sole Protector Casali Ballerina'}
                price={'80-100'}
                imageUrl={'/images/services/casaliSoleProtectors/bg-price-mobile-3.png'}
            >
                <CardText type={'normal'} className={''}>
                    Our Sole Binding Service includes the application of the Casali Silk Sole Protector—a premium,
                    high-quality sole (excluding the heel) specifically designed to preserve both the appearance
                    and structural integrity of luxury shoes.
                </CardText>
            </MobileCard>
            <MobileCard
                title={'/ Heel Restoration Service'}
                price={'80-100'}
                imageUrl={'/images/services/casaliSoleProtectors/bg-price-mobile-4.png'}
            >
                <CardText type={'normal'} className={''}>
                    Our Heel Restoration Service focuses on binding the sole on the heel just like the original
                    design. This service ensures that your luxury shoes maintain their aesthetic appeal while
                    receiving the necessary repairs to keep them in top condition.
                </CardText>
            </MobileCard>
        </Card>
    );
};

export default Price;