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
            <div className={'flex flex-col w-full table:flex-row border-[0.5px] border-primary-cl'}>
                <div
                    className={'flex-1 min-w-full min-h-48 p-7 table:p-12 table:min-h-72'}
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        filter: 'brightness(0.9)',
                    }}
                >
                    <ul className={'flex justify-between gap-8 table:flex-col table:gap-7'}>
                        <li className={'min-w-40'}>
                            <CardText className={''} type={'uppercase'} >
                                {title}
                            </CardText>
                        </li>
                        <li className={'min-w-[120px]'}>
                            <CardText className={''} type={'accent-uppercase'}>
                                *Service Price:
                            </CardText>
                            <CardText className={''} type={'uppercase'}>
                                {price} gel
                            </CardText>
                        </li>
                    </ul>
                </div>
                <div className={'flex flex-1 flex-col p-7 table:p-12'}>
                    {children}
                </div>
            </div>
    )
}

const Price = () => {
    return (
        <Card className={'gap-7 pt-[60px] table:pt-[100px]'}>
            <MobileCard
            title={'/ Leather Jacket Full Restoration'}
            price={'200-400'}
            imageUrl={'/images/services/jacket/price-bg-mobile-1.png'}
            >
               <>
                   <CardText type={'accent-uppercase'} className={''}>
                       Service includes:
                   </CardText>
                   <ul className={'list-disc pl-4 mb-1'}>
                       <li>
                           <CardText type={'normal'} className={'!font-light'}>
                               Exterior Cleaning
                           </CardText>
                       </li>
                       <li>
                           <CardText type={'normal'} className={'!font-light'}>
                               Complete leather exterior Restoration
                           </CardText>
                       </li>
                   </ul>
                   <CardText type={'accent-uppercase'} className={''}>
                       Exclusions:
                   </CardText>
                   <ul className={'list-disc pl-4 mb-1'}>
                       <li>
                           <CardText type={'normal'} className={'!font-light'}>
                               Please note that cleaning of the inner lining is not included in this service.
                           </CardText>
                       </li>
                   </ul>
               </>
            </MobileCard>
            <MobileCard
                title={'/ Local Restoration of the Leather Coat'}
                price={'120-200'}
                imageUrl={'/images/services/jacket/price-bg-mobile-2.png'}
            >
                <>
                    <CardText type={'normal'} className={'mb-6'}>
                        Local Restoration Service designed to address minor damages with precision and care.
                    </CardText>
                    <CardText type={'accent-uppercase'} className={''}>
                        Service includes:
                    </CardText>
                    <ul className={'list-disc pl-4 mb-1'}>
                        <li>
                            <CardText type={'normal'} className={'!font-light'}>
                               <span className={'font-normal'}>Targeted Repairs:</span>
                                {' '}
                                We provide local repair services for one or two minor injuries on your leather coat.
                            </CardText>
                        </li>
                    </ul></>
            </MobileCard>
        </Card>
    );
};

export default Price;