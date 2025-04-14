import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import Card from "./components/Card.tsx";
import CardTitle from "./components/CardTitle.tsx";
import CardText from "./components/CardText.tsx";

interface ICardProps {
    className: string;
    title: string;
    description: string;
    order?: number;
}

const MobileCard: React.FC<ICardProps> = ({className, title, description, order}) => {

    return (
        <div className={`flex flex-col gap-7 w-full ${className}`}>
            <div className={'relative flex justify-center py-5 border-[0.5px] border-primary-cl bg-primary-bg'}>
                <CardText className={''} type={'uppercase'}>
                    {title}
                </CardText>
                <div className={'absolute top-[-10px] left-[-10px] z-10 flex justify-center items-center w-8 h-8 border-[0.5px] border-primary-cl rounded-full bg-secondary-bg'}>
                    <CardText className={''} type={'uppercase'}>
                        {order}.
                    </CardText>
                </div>
            </div>
            <div className={''}>
                <CardText className={''} type={'normal'}>
                    {description}
                </CardText>
            </div>
        </div>
    )
}

const LuxuryShoesBenefits = memo(() => {
    const { t } = useTranslation();
    
    return (
        <Card className={'gap-8'}>
            <CardTitle className={''}>
                {t('casali.benefits.title')}
            </CardTitle>
            <div className={'grid grid-cols-1 table:grid-cols-2 gap-8'}>
                <MobileCard className={''} title={t('casali.benefits.colorMatch.title')} description={t('casali.benefits.colorMatch.description')} order={1} />
                <MobileCard className={''} title={t('casali.benefits.elegance.title')} description={t('casali.benefits.elegance.description')} order={2} />
                <MobileCard className={''} title={t('casali.benefits.customization.title')} description={t('casali.benefits.customization.description')} order={3} />
                <MobileCard className={''} title={t('casali.benefits.highEnd.title')} description={t('casali.benefits.highEnd.description')} order={4} />
            </div>
        </Card>
    );
});

export default LuxuryShoesBenefits;