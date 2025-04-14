import React, { memo } from "react";
import { useTranslation } from 'react-i18next';

import Card from "./components/Card.tsx";
import CardText from "./components/CardText.tsx";

interface IMobileCardProps {
    titleKey: string;
    price: string;
    imageUrl: string;
    children: React.ReactNode;
}

const MobileCard: React.FC<IMobileCardProps> = memo(({titleKey, price, children, imageUrl}) => {
    const { t } = useTranslation();
    
    return (
        <div className={'flex flex-col w-full table:flex-row border-[0.5px] border-primary-cl'}>
            <div
                className={'flex-1 w-full table:w-auto min-h-48 p-7 table:p-12 table:min-h-72'}
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(0.9)',
                }}
            >
                <ul className={'flex justify-between gap-2 table:flex-col table:gap-7'}>
                    <li className={'min-w-40'}>
                        <CardText className={''} type={'uppercase'} >
                            {t(titleKey)}
                        </CardText>
                    </li>
                    <li className={'min-w-[120px]'}>
                        <CardText className={''} type={'accent-uppercase'}>
                            {t('bag.servicePrice')}
                        </CardText>
                        <CardText className={''} type={'uppercase'}>
                            {price} {t('bag.currency')}
                        </CardText>
                    </li>
                </ul>
            </div>
            <div className={'flex flex-1 flex-col p-7 table:p-12'}>
                {children}
            </div>
        </div>
    )
});

const Price = memo(() => {
    const { t } = useTranslation();
    
    return (
        <Card className={'gap-7 pt-[60px] table:pt-[100px]'}>
            <MobileCard
                titleKey={'bag.restoration.title'}
                price={'250-900'}
                imageUrl={'/images/services/bag/bag-bg-mobile-1.png'}
            >
               <>
                   <CardText type={'accent-uppercase'} className={''}>
                       {t('bag.serviceIncludes')}
                   </CardText>
                   <ul className={'list-disc pl-4 mb-6'}>
                       <li>
                           <CardText type={'normal'} className={'!font-normal'}>
                               {t('bag.restoration.cleaning.title')} <span className={'font-light'}>
                               {t('bag.restoration.cleaning.description')}
                           </span>
                           </CardText>
                       </li>
                       <li>
                           <CardText type={'normal'} className={'!font-normal'}>
                               {t('bag.restoration.moisturization.title')} <span className={'font-light'}>
                               {t('bag.restoration.moisturization.description')}
                           </span>
                           </CardText>
                       </li>
                   </ul>
                   <CardText type={'normal'} className={''}>
                       {t('bag.restoration.note')}
                   </CardText>
               </>
            </MobileCard>
            <MobileCard
                titleKey={'bag.silicone.title'}
                price={'150-250'}
                imageUrl={'/images/services/bag/bag-bg-mobile-2.png'}
            >
                <CardText type={'accent-uppercase'} className={''}>
                    {t('bag.silicone.description')}
                </CardText>
            </MobileCard>
            <MobileCard
                titleKey={'bag.handles.title'}
                price={t('bag.handles.priceFrom')}
                imageUrl={'/images/services/bag/bag-bg-mobile-3.png'}
            >
                <>
                    <CardText type={'accent-uppercase'} className={'mb-4'}>
                        {t('bag.handles.description')}
                    </CardText>
                    <CardText type={'accent-uppercase'} className={''}>
                        {t('bag.serviceIncludes')}
                    </CardText>
                    <ul className={'list-disc pl-4'}>
                        <li>
                            <CardText type={'normal'} className={'!font-normal'}>
                                {t('bag.handles.craftsmanship.title')} <span className={'font-light'}>
                                {t('bag.handles.craftsmanship.description')}
                           </span>
                            </CardText>
                        </li>
                        <li>
                            <CardText type={'normal'} className={'!font-normal'}>
                                {t('bag.handles.materials.title')} <span className={'font-light'}>
                                {t('bag.handles.materials.description')}
                           </span>
                            </CardText>
                        </li>
                    </ul>
                </>
            </MobileCard>
        </Card>
    );
});

export default Price;