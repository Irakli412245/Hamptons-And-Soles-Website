import React, { memo } from "react";
import { useTranslation } from 'react-i18next';

import Card from "./components/Card.tsx";
import CardTitle from "./components/CardTitle.tsx";
import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";
import CardText from "./components/CardText.tsx";

interface IPropsCardContainer {
    children: React.ReactNode;
    className: string;
    order?: number;
}

const CardContainer: React.FC<IPropsCardContainer> = memo(({children, className, order}) => {
    return (
        <div className={`relative flex justify-center items-center table:max-w-[510px] table:h-[233px] p-12 border-[0.5px] border-primary-cl ${className}`}>
            <div className={'absolute top-[-15px] left-1/2 -translate-x-1/2 z-10 flex justify-center items-center w-[30px] h-[30px] border-[0.5px] border-primary-cl rounded-full bg-secondary-bg'}>
                {order}
            </div>
            {children}
        </div>
    )
});

const LeatherBagCareInstructions = memo(() => {
    const { t } = useTranslation();
    const {width} = useWindowDimensions();
    const isMobile = width < 768;
    
    return (
        <Card className={'gap-7 pb-[60px] table:pb-[100px]'}>
            <CardTitle className={'mb-[60px] table:mb-[70px]'}>
                {t('bag.care.title.firstLine')}
                {isMobile && <br/>}
                {t('bag.care.title.secondLine')}
            </CardTitle>
            <div className={'flex flex-col gap-10 justify-center items-center table:flex-row table:flex-wrap'}>
                <CardContainer
                    order={1}
                    className={''}
                >
                    <CardText className={''} type={'normal'}>
                        {t('bag.care.point1.text')}
                        <span className={'font-semibold'}>{t('bag.care.point1.bold')}</span>.
                    </CardText>
                </CardContainer>
                <CardContainer
                    order={2}
                    className={''}
                >
                    <CardText className={''} type={'normal'}>
                        <span className={'font-semibold'}>{t('bag.care.point2.title')}</span>
                        <br/>
                        {t('bag.care.point2.text')}
                    </CardText>
                </CardContainer>
                <CardContainer
                    order={3}
                    className={''}
                >
                    <CardText className={''} type={'normal'}>
                        <span className={'font-semibold'}>{t('bag.care.point3.title')}</span>
                        <br/>
                        {t('bag.care.point3.text')}
                    </CardText>
                </CardContainer>
                <CardContainer
                    order={4}
                    className={''}
                >
                    <CardText className={''} type={'normal'}>
                        <span className={'font-semibold'}>{t('bag.care.point4.title')}</span>
                        <br/>
                        {t('bag.care.point4.text')}
                    </CardText>
                </CardContainer>
                <CardContainer
                    order={5}
                    className={''}
                >
                    <CardText className={''} type={'normal'}>
                        {t('bag.care.point5')}
                    </CardText>
                </CardContainer>
            </div>
        </Card>
    );
});

export default LeatherBagCareInstructions;