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
                    filter: 'brightness(0.9)',
                }}
            >
                <ul className={'flex justify-between gap-8 table:flex-col table:gap-7'}>
                    <li className={'min-w-40'}>
                        <CardText className={''} type={'uppercase'} >
                            {t(titleKey)}
                        </CardText>
                    </li>
                    <li className={'min-w-[100px]'}>
                        <CardText className={''} type={'accent-uppercase'}>
                            {t('casali.servicePrice')}
                        </CardText>
                        <CardText className={''} type={'uppercase'}>
                            {price} {t('casali.currency')}
                        </CardText>
                    </li>
                </ul>
            </div>
            <div className={'flex flex-1 flex-col gap-4 p-7 table:p-12'}>
                {children}
            </div>
        </div>
    )
});

const Price = memo(() => {
    const { t } = useTranslation();
    
    return (
        <Card className={'gap-7 pt-[60px]'}>
            <div data-aos='fade-up' data-aos-delay='100'>
                <MobileCard
                    titleKey={'casali.mirror.title'}
                    price={'100-120'}
                    imageUrl={'/images/services/casaliSoleProtectors/bg-price-mobile-1.png'}
                >
                   <>
                       <CardText type={'normal'} className={''}>
                           {t('casali.mirror.description1')}
                       </CardText>
                       <CardText type={'normal'} className={''}>
                           {t('casali.mirror.description2')}
                       </CardText>
                   </>
                </MobileCard>
            </div>
            <div data-aos='fade-up' data-aos-delay='200'>
                <MobileCard
                    titleKey={'casali.silk.title'}
                    price={'100-120'}
                    imageUrl={'/images/services/casaliSoleProtectors/bg-price-mobile-2.png'}
                >
                    <>
                        <CardText type={'normal'} className={''}>
                            {t('casali.silk.description1')}
                        </CardText>
                        <CardText type={'normal'} className={''}>
                            {t('casali.silk.description2')}
                        </CardText>
                    </>
                </MobileCard>
            </div>
            <div data-aos='fade-up' data-aos-delay='300'>
                <MobileCard
                    titleKey={'casali.ballerina.title'}
                    price={'80-100'}
                    imageUrl={'/images/services/casaliSoleProtectors/bg-price-mobile-3.png'}
                >
                    <CardText type={'normal'} className={''}>
                        {t('casali.ballerina.description')}
                    </CardText>
                </MobileCard>
            </div>
            <div data-aos='fade-up' data-aos-delay='400'>
                <MobileCard
                    titleKey={'casali.heel.title'}
                    price={'80-100'}
                    imageUrl={'/images/services/casaliSoleProtectors/bg-price-mobile-4.png'}
                >
                    <CardText type={'normal'} className={''}>
                        {t('casali.heel.description')}
                    </CardText>
                </MobileCard>
            </div>
        </Card>
    );
});

export default Price;