import React from "react";

import Card from "./components/Card.tsx";
import CardTitle from "./components/CardTitle.tsx";
import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";
import CardText from "./components/CardText.tsx";

interface IPropsCardContainer {
    children: React.ReactNode;
    className: string;
    order?: number;
}

const CardContainer: React.FC<IPropsCardContainer> = ({children, className, order}) => {
    return (
        <div className={`relative flex justify-center items-center table:max-w-[510px] table:h-[233px] p-12 border-[0.5px] border-primary-cl ${className}`}>
            <div className={'absolute top-[-15px] left-1/2 -translate-x-1/2 z-10 flex justify-center items-center w-[30px] h-[30px] border-[0.5px] border-primary-cl rounded-full bg-secondary-bg'}>
                {order}
            </div>
            {children}
        </div>
    )
}

const LeatherBagCareInstructions = () => {
    const {width} = useWindowDimensions();
    const isMobile = width < 768;
    return (
        <Card className={'gap-7 pb-[60px] table:pb-[100px]'}>
            <CardTitle className={'mb-[60px] table:mb-[70px]'}>
                Leather
                {isMobile && <br/>}
                Bag Care Instructions
            </CardTitle>
            <div className={'flex flex-col gap-10 justify-center items-center table:flex-row table:flex-wrap'}>
                <CardContainer
                    order={1}
                    className={''}

                >
                    <CardText className={''} type={'normal'}>
                        A leather bags should be cleaned 3-4 times a year to maintain its condition and extend its lifespan.
                        When cleaning a leather bag, it’s important to <span className={'font-semibold'}>use only special leather cleaners</span>.
                    </CardText>
                </CardContainer>
                <CardContainer
                    order={2}
                    className={''}

                >
                    <CardText className={''} type={'normal'}>
                        <span className={'font-semibold'}>Avoid Harsh Chemicals:</span>
                        <br/>
                        Do not use wet wipes, household cleaners or alcohol-based products.
                    </CardText>
                </CardContainer>
                <CardContainer
                    order={3}
                    className={''}

                >
                    <CardText className={''} type={'normal'}>
                        <span className={'font-semibold'}>Leather Conditioner:</span>
                        <br/>
                        Apply a leather conditioner after cleaning to keep leather soft and prevent from drying out or
                        cracking.
                    </CardText>
                </CardContainer>
                <CardContainer
                    order={4}
                    className={''}

                >
                    <CardText className={''} type={'normal'}>
                        <span className={'font-semibold'}>Protect from Water:</span>
                        <br/>
                        Apply a leather protector or water-repellent spray designed for leather to shield the bag from
                        rain and moisture.
                    </CardText>
                </CardContainer>
                <CardContainer
                    order={5}
                    className={''}

                >
                    <CardText className={''} type={'normal'}>
                        For deeper cleaning or stains that cannot be handled at home, take the bag to a professional
                        leather cleaner who specializes in treating leather garments.
                    </CardText>
                </CardContainer>
            </div>
        </Card>
    );
};

export default LeatherBagCareInstructions;