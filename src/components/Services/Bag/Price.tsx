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
            <div className={'flex flex-col table:flex-row border-[0.5px] border-primary-cl'}>
                <div
                    className={'flex-1 min-w-80 min-h-48 p-7 table:p-12 table:min-h-72'}
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
            title={'/ Bag Restoration Service'}
            price={'250-900'}
            imageUrl={'/images/services/bag/bag-bg-mobile-1.png'}
            >
               <>
                   <CardText type={'accent-uppercase'} className={''}>
                       Service includes:
                   </CardText>
                   <ul className={'list-disc pl-4 mb-6'}>
                       <li>
                           <CardText type={'normal'} className={'!font-normal'}>
                               Delicate Cleaning: <span className={'font-light'}>
                               We gently clean both the interior and exterior of your bag.
                           </span>
                           </CardText>
                       </li>
                       <li>
                           <CardText type={'normal'} className={'!font-normal'}>
                               Restoration and Moisturization: <span className={'font-light'}>
                               Our experts carefully repair any damage to the leather surface and apply moisturization
                               to maintain the leather’s softness and luster.
                           </span>
                           </CardText>
                       </li>
                   </ul>
                   <CardText type={'normal'} className={''}>
                       Please note, interior restoration is not included in this service.
                   </CardText>
               </>
            </MobileCard>
            <MobileCard
                title={'/ Silicone Restoration on Bag Handles'}
                price={'150-250'}
                imageUrl={'/images/services/bag/bag-bg-mobile-2.png'}
            >
                <CardText type={'accent-uppercase'} className={''}>
                    Revitalize the handles of your luxury bags with our specialized Silicone Restoration Service.
                    This service is tailored to restore the silicone on your bag handles, ensuring they look as
                    good as new.
                </CardText>
            </MobileCard>
            <MobileCard
                title={'/  Making New Bag Handles'}
                price={'from 250'}
                imageUrl={'/images/services/bag/bag-bg-mobile-3.png'}
            >
                <>
                    <CardText type={'accent-uppercase'} className={'mb-4'}>
                        We specialize in crafting high-quality, custom handles that perfectly match your bag's style
                        and materials.
                    </CardText>
                    <CardText type={'accent-uppercase'} className={''}>
                        Service Includes:
                    </CardText>
                    <ul className={'list-disc pl-4'}>
                        <li>
                            <CardText type={'normal'} className={'!font-normal'}>
                                Custom Craftsmanship: <span className={'font-light'}>
                                We will create new bag handles tailored to your specifications.
                           </span>
                            </CardText>
                        </li>
                        <li>
                            <CardText type={'normal'} className={'!font-normal'}>
                                Material Matching: <span className={'font-light'}>
                                We use premium materials that align with your bag’s original design.
                           </span>
                            </CardText>
                        </li>
                    </ul>
                </>
            </MobileCard>
        </Card>
    );
};

export default Price;