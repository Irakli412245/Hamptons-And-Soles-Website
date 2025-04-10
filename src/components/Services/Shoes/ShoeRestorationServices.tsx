import React from "react";

import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";
import Card from "./components/Card.tsx";
import CardText from "./components/CardText.tsx";

interface IMobileCardProps {
    children: React.ReactNode;
    bgImageUrl: string;
    textLeft: string;
    textRight: string;
}

const BoxContainer: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div className={'flex-1 p-10 border-[0.5px] border-primary-cl bg-secondary-bg'}>
            {children}
        </div>
    );
}

const MobileCard: React.FC<IMobileCardProps> = ({children, bgImageUrl, textLeft, textRight}) => {
    return (
        <div className={'border-[0.5px] border-primary-cl'}>
            <div
                className={'min-w-80 min-h-48 p-6'}
                style={{
                    backgroundImage: `url(${bgImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.9)',
                }}
            >
                <ul className={'flex justify-between gap-8 font-normal text-[12px] leading-[125%] uppercase'}>
                    <li className={'min-w-40'}>
                        <p className={''}>
                            {textLeft}
                        </p>
                    </li>
                    <li>
                        <p className={'min-w-[100px]'}>
                            <span className={'font-light text-[10px] leading-[150%] tracking-[0.1em]'}>
                            *Service Price:
                            </span>
                            <br/>
                            {textRight}
                        </p>
                    </li>
                </ul>
            </div>
            {children}
        </div>
    );
}

const CardDesktop = () => {
    return (
        <div>
            <div
                className={'relative w-screen h-[400px] pt-10 px-20'}
                style={{
                    backgroundImage: `url('/images/services/shoes/bg-1.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.9)',
                }}
            >
                <ul className={'flex justify-between'}>
                    <li className={'max-w-[600px]'}>
                        <p className={'font-semibold text-[18px] leading-[140%] uppercase mb-8'}>
                            / Leather Shoe Restoration Service
                        </p>
                        <p className={'font-semibold text-[18px] leading-[150%] uppercase'}>
                            <span className={'font-light text-[10px] leading-[150%] tracking-[0.1em] uppercase'}>Service Price:</span>
                            <br/>
                            200-250 GEL
                        </p>
                    </li>
                    <li className={'max-w-[414px]'}>
                        <p className={'font-light text-[14px] leading-[150%] tracking-[0.1em]'}>
                            Our leather shoe restoration service is designed to bring new life to your cherished footwear
                            while preserving the integrity of the leather.
                        </p>
                    </li>
                </ul>
            </div>
            <div className={'relative flex-1 pt-[130px] px-20'}>
                <p className={'max-w-[270px] font-light text-[13px] leading-[130%] tracking-[0.1em]'}>
                    *per pair of shoes depending
                    on the extent of the work required.
                </p>
                <ul className={'absolute top-[-80px] left-0 right-0 flex flex-1 gap-7 px-20'}>
                    <BoxContainer>
                        <>
                            <p className={'font-light text-[14px] leading-[150%] tracking-[0.1em] uppercase'}>
                                Service Includes:
                            </p>
                            <ul className={'list-disc pl-4'}>
                                <li>
                                    <CardText className={'!capitalize'}>
                                        Delicate cleaning of the shoes, both inside and outside.
                                    </CardText>
                                </li>
                                <li>
                                    <CardText className={'!capitalize'}>
                                        Dyeing and moisturizing of suede/nubuck to restore color and softness.
                                    </CardText>
                                </li>
                            </ul>
                        </>
                    </BoxContainer>
                    <BoxContainer>
                        <>
                            <p className={'font-light text-[14px] leading-[150%] tracking-[0.1em] uppercase'}>
                                Service Does Not Include:
                            </p>
                            <ul className={'list-disc pl-4'}>
                                <li>
                                    <CardText className={'!capitalize'}>
                                        Restoration or repairs to the soles.
                                    </CardText>
                                </li>
                                <li>
                                    <CardText className={'!capitalize'}>
                                        Replacement of laces.
                                    </CardText>
                                </li>
                                <li>
                                    <CardText className={'!capitalize'}>
                                        Restoration or repairs to the interior of the shoes.
                                    </CardText>
                                </li>
                            </ul>
                        </>
                    </BoxContainer>
                </ul>
            </div>
        </div>
    )
}

const ShoeRestorationServices = () => {
    const {width} = useWindowDimensions();
    const isMobile = width <= 768;

    return (
        <Card className={'!px-0'}>
            {isMobile ? (
                <div className={'flex flex-col gap-7 px-[30px]'}>
                    <MobileCard
                        textLeft={'/ Leather Shoe Restoration Service'}
                        textRight={'200-250 GEL'}
                        bgImageUrl={'/images/services/shoes/bg-mobile-1.png'}
                    >
                        <div className={'flex flex-col gap-4 p-6'}>
                            <CardText className={''}>
                                Our leather shoe restoration service is designed to bring new life to your cherished footwear while
                                preserving the integrity of the leather.
                            </CardText>
                            <div>
                                <CardText className={'!uppercase'}>
                                    Service Includes:
                                </CardText>
                                <ul className={'list-disc pl-4'}>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Delicate cleaning of the shoes, both inside and outside.
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Restoring surface damage on the outside of leather, including moisturizing to revitalize
                                            the leather's look.
                                        </CardText>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <CardText className={'!uppercase'}>
                                    Service Does Not Include:
                                </CardText>
                                <ul className={'list-disc pl-4'}>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Restoration or repairs to the soles.
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Replacement of laces.
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Restoration or repairs to the interior of the shoes.
                                        </CardText>
                                    </li>
                                </ul>
                            </div>
                            <CardText className={''}>
                                *per pair of shoes depending
                                on the extent of the work required.
                            </CardText>
                        </div>
                    </MobileCard>
                    <MobileCard
                        textLeft={'/ Suede Restoration Service'}
                        textRight={'200-250 GEL'}
                        bgImageUrl={'/images/services/shoes/bg-mobile-2.png'}
                    >
                        <div className={'flex flex-col gap-4 p-6'}>
                            <CardText className={''}>
                                Our specialized dyeing service for suede and nubuck shoes is designed to refresh and
                                restore the color and beauty of these delicate materials.
                            </CardText>
                            <div>
                                <CardText className={'!uppercase'}>
                                    Service Includes:
                                </CardText>
                                <ul className={'list-disc pl-4'}>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Delicate cleaning of the shoes, both inside and outside.
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Dyeing and moisturizing of suede/nubuck to restore color and softness.
                                        </CardText>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <CardText className={'!uppercase'}>
                                    Service Does Not Include:
                                </CardText>
                                <ul className={'list-disc pl-4'}>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Restoration or repairs to the soles.
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Replacement of laces.
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Restoration or repairs to the interior of the shoes.
                                        </CardText>
                                    </li>
                                </ul>
                            </div>
                            <CardText className={''}>
                                *per pair of shoes depending
                                on the extent of the work required.
                            </CardText>
                        </div>
                    </MobileCard>
                    <MobileCard
                        textLeft={'/ Metallic Leather Shoe Restoration'}
                        textRight={'300-350 GEL'}
                        bgImageUrl={'/images/services/shoes/bg-mobile-3.png'}
                    >
                        <div className={'flex flex-col gap-4 p-6'}>
                            <CardText className={''}>
                                Our metallic leather shoe restoration service is crafted to renew the appearance of your
                                shoes while protecting the delicate metallic finish.
                            </CardText>
                            <div>
                                <CardText className={'!uppercase'}>
                                    Service Includes:
                                </CardText>
                                <ul className={'list-disc pl-4'}>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Delicate cleaning of the shoes, both inside and outside.
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Restoration and moisturization of damaged areas on the leather surface to
                                            preserve the metallic sheen.
                                        </CardText>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <CardText className={'!uppercase'}>
                                    Service Does Not Include:
                                </CardText>
                                <ul className={'list-disc pl-4'}>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Restoration or repairs to the soles.
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Replacement of laces.
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Restoration or repairs to the interior of the shoes.
                                        </CardText>
                                    </li>
                                </ul>
                            </div>
                            <CardText className={''}>
                                *per pair of shoes depending
                                on the extent of the work required.
                            </CardText>
                        </div>
                    </MobileCard>
                    <MobileCard
                        textLeft={'/ Sneaker Repair Restoration Service'}
                        textRight={'*'}
                        bgImageUrl={'/images/services/shoes/bg-mobile-4.png'}
                    >
                        <div className={'flex flex-col gap-4 p-6'}>
                            <CardText className={''}>
                                Our sneaker repair service covers a wide range of needs, from cleaning to extensive
                                restoration. Whether you need basic repairs or a full refresh, we've got your sneakers
                                covered!
                            </CardText>
                            <div>
                                <CardText className={'!uppercase'}>
                                    Service May Include:
                                </CardText>
                                <ul className={'list-disc pl-4'}>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Deep Cleaning.
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Surface Repairs.
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Inside heels repair.
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Golden Goose Sole Repairs.
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Full Sole Replacement.
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Full Sole Replacement.
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Replace worn-out or damaged soles with new ones (depending on model and
                                            availability).
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Replacement of insoles.
                                        </CardText>
                                    </li>
                                    <li>
                                        <CardText className={'!capitalize'}>
                                            Lace Replacement.
                                        </CardText>
                                    </li>
                                </ul>
                            </div>
                            <CardText className={''}>
                                *pricing varies based on the specific
                                repairs and customization needed.
                            </CardText>
                        </div>
                    </MobileCard>
                    <MobileCard
                        textLeft={'/ Shoe Stretching Service'}
                        textRight={'From 50 GEL'}
                        bgImageUrl={'/images/services/shoes/bg-mobile-5.png'}
                    >
                        <div className={'flex flex-col gap-4 p-6'}>
                            <CardText className={''}>
                                Our shoe stretching service is designed to provide a comfortable fit by slightly
                                increasing the length or width of your shoes without compromising their structure.
                            </CardText>
                            <div>
                                <CardText className={'!uppercase'}>
                                    Service May Include:
                                </CardText>
                                <CardText className={''}>
                                    Slight increase in length or width: Gentle stretching to accommodate more room for
                                    your feet, perfect for tight-fitting shoes.
                                </CardText>
                            </div>
                            <CardText className={''}>
                                *per pair of shoes.
                            </CardText>
                        </div>
                    </MobileCard>
                    <MobileCard
                        textLeft={'/ Patent Leather Heel Replacement'}
                        textRight={'From 50 GEL'}
                        bgImageUrl={'/images/services/shoes/bg-mobile-6.png'}
                    >
                        <div className={'flex flex-col gap-4 p-6'}>
                            <CardText className={''}>
                                Our Patent Leather Heel Replacement service focuses on restoring shoes with worn or
                                damaged patent leather heels to their original elegance.
                            </CardText>
                            <CardText className={''}>
                                We meticulously replace the old leather with new, premium patent leather, ensuring a
                                flawless finish that matches the shoe’s original look.
                            </CardText>
                            <CardText className={''}>
                                *per pair of shoes.
                            </CardText>
                        </div>
                    </MobileCard>
                    <MobileCard
                        textLeft={'/ Golden Goose Sole Repair Service'}
                        textRight={'From 250 GEL'}
                        bgImageUrl={'/images/services/shoes/bg-mobile-7.png'}
                    >
                        <div className={'flex flex-col gap-4 p-6'}>
                            <CardText className={''}>
                                Service includes: Restoration of Golden Goose soles and replacement of worn soles with
                                high-quality rubber full soles.
                            </CardText>
                            <CardText className={''}>
                                Service involves only resoling the shoes, without additional cleaning or restoration.
                            </CardText>
                            <CardText className={''}>
                                *per pair of shoes.
                            </CardText>
                        </div>
                    </MobileCard>
                </div>
            ) : (
                <div className={'flex flex-col gap-20'}>
                    <CardDesktop/>
                    <CardDesktop/>
                    <CardDesktop/>
                </div>
            )}
        </Card>
    );
};

export default ShoeRestorationServices;