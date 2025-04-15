import React from "react";

import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";
import Card from "./components/Card.tsx";
import ServicesText from "../components/ServicesText.tsx";

interface ICardProps {
    children: React.ReactNode;
    bgImageUrl: string;
    textLeft: string;
    textRight: string;
    price?: string;
}

const BoxContainer: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div className={'flex-1 p-10 border-[0.5px] border-primary-cl bg-secondary-bg'}>
            {children}
        </div>
    );
}

const MobileCard: React.FC<ICardProps> = ({children, bgImageUrl, textLeft, textRight}) => {
    return (
        <div className={'border-[0.5px] border-primary-cl'}>
            <div
                className={'w-full min-h-48 py-6 px-4'}
                style={{
                    backgroundImage: `url(${bgImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.9)',
                }}
            >
                <ul className={'flex justify-between gap-4'}>
                    <li className={'flex-1'}>
                        <ServicesText variant={'variant4'} className={''}>
                            {textLeft}
                        </ServicesText>
                    </li>
                    <li className={'flex-1'}>
                        <ServicesText variant={'variant5'} className={'text-right'}>
                            *Service Price:
                        </ServicesText>
                        <ServicesText variant={'variant4'} className={'text-right'}>
                            {textRight}
                        </ServicesText>
                    </li>
                </ul>
            </div>
            {children}
        </div>
    );
}

const CardDesktop: React.FC<ICardProps>  = ({children, bgImageUrl, textLeft, textRight, price}) => {
    return (
        <div>
            <div
                className={'relative w-screen h-[400px] pt-10 px-20'}
                style={{
                    backgroundImage: `url(${bgImageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.9)',
                }}
            >
                <ul className={'flex justify-between'}>
                    <li className={'max-w-[600px]'}>
                        <p className={'font-semibold text-[18px] leading-[140%] uppercase mb-8'}>
                            {textLeft}
                        </p>
                        <p className={'font-semibold text-[18px] leading-[150%] uppercase'}>
                            <span className={'font-light text-[10px] leading-[150%] tracking-[0.1em] uppercase'}>Service Price:</span>
                            <br/>
                            {price} GEL
                        </p>
                    </li>
                    <li className={'max-w-[414px]'}>
                        <p className={'font-light text-[14px] leading-[150%] tracking-[0.1em]'}>
                            {textRight}
                        </p>
                    </li>
                </ul>
            </div>
            {children}
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
                            <ServicesText variant={'variant2'} className={''}>
                                Our leather shoe restoration service is designed to bring new life to your cherished footwear while
                                preserving the integrity of the leather.
                            </ServicesText>
                            <div>
                                <ServicesText variant={'variant2'} className={'uppercase'}>
                                    Service Includes:
                                </ServicesText>
                                <ul className={'list-disc pl-4'}>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Delicate cleaning of the shoes, both inside and outside.
                                        </ServicesText>
                                    </li>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Restoring surface damage on the outside of leather, including moisturizing to revitalize
                                            the leather's look.
                                        </ServicesText>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ServicesText variant={'variant2'} className={'uppercase'}>
                                    Service Does Not Include:
                                </ServicesText>
                                <ul className={'list-disc pl-4'}>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Restoration or repairs to the soles.
                                        </ServicesText>
                                    </li>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Replacement of laces.
                                        </ServicesText>
                                    </li>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Restoration or repairs to the interior of the shoes.
                                        </ServicesText>
                                    </li>
                                </ul>
                            </div>
                            <ServicesText variant={'variant2'} className={''}>
                                *per pair of shoes depending
                                on the extent of the work required.
                            </ServicesText>
                        </div>
                    </MobileCard>
                    <MobileCard
                        textLeft={'/ Suede Restoration Service'}
                        textRight={'200-250 GEL'}
                        bgImageUrl={'/images/services/shoes/bg-mobile-2.png'}
                    >
                        <div className={'flex flex-col gap-4 p-6'}>
                            <ServicesText variant={'variant2'} className={''}>
                                Our specialized dyeing service for suede and nubuck shoes is designed to refresh and
                                restore the color and beauty of these delicate materials.
                            </ServicesText>
                            <div>
                                <ServicesText variant={'variant2'} className={'uppercase'}>
                                    Service Includes:
                                </ServicesText>
                                <ul className={'list-disc pl-4'}>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Delicate cleaning of the shoes, both inside and outside.
                                        </ServicesText>
                                    </li>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Dyeing and moisturizing of suede/nubuck to restore color and softness.
                                        </ServicesText>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ServicesText variant={'variant2'} className={'uppercase'}>
                                    Service Does Not Include:
                                </ServicesText>
                                <ul className={'list-disc pl-4'}>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Restoration or repairs to the soles.
                                        </ServicesText>
                                    </li>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Replacement of laces.
                                        </ServicesText>
                                    </li>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Restoration or repairs to the interior of the shoes.
                                        </ServicesText>
                                    </li>
                                </ul>
                            </div>
                            <ServicesText variant={'variant2'} className={''}>
                                *per pair of shoes depending
                                on the extent of the work required.
                            </ServicesText>
                        </div>
                    </MobileCard>
                    <MobileCard
                        textLeft={'/ Metallic Leather Shoe Restoration'}
                        textRight={'300-350 GEL'}
                        bgImageUrl={'/images/services/shoes/bg-mobile-3.png'}
                    >
                        <div className={'flex flex-col gap-4 p-6'}>
                            <ServicesText variant={'variant2'} className={''}>
                                Our metallic leather shoe restoration service is crafted to renew the appearance of your
                                shoes while protecting the delicate metallic finish.
                            </ServicesText>
                            <div>
                                <ServicesText variant={'variant2'} className={'uppercase'}>
                                    Service Includes:
                                </ServicesText>
                                <ul className={'list-disc pl-4'}>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Delicate cleaning of the shoes, both inside and outside.
                                        </ServicesText>
                                    </li>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Restoration and moisturization of damaged areas on the leather surface to
                                            preserve the metallic sheen.
                                        </ServicesText>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ServicesText variant={'variant2'} className={'uppercase'}>
                                    Service Does Not Include:
                                </ServicesText>
                                <ul className={'list-disc pl-4'}>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Restoration or repairs to the soles.
                                        </ServicesText>
                                    </li>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Replacement of laces.
                                        </ServicesText>
                                    </li>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Restoration or repairs to the interior of the shoes.
                                        </ServicesText>
                                    </li>
                                </ul>
                            </div>
                            <ServicesText variant={'variant2'} className={''}>
                                *per pair of shoes depending
                                on the extent of the work required.
                            </ServicesText>
                        </div>
                    </MobileCard>
                    <MobileCard
                        textLeft={'/ Sneaker Repair Restoration Service'}
                        textRight={'*'}
                        bgImageUrl={'/images/services/shoes/bg-mobile-4.png'}
                    >
                        <div className={'flex flex-col gap-4 p-6'}>
                            <ServicesText variant={'variant2'} className={''}>
                                Our sneaker repair service covers a wide range of needs, from cleaning to extensive
                                restoration. Whether you need basic repairs or a full refresh, we've got your sneakers
                                covered!
                            </ServicesText>
                            <div>
                                <ServicesText variant={'variant2'} className={'uppercase'}>
                                    Service May Include:
                                </ServicesText>
                                <ul className={'list-disc pl-4'}>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Deep Cleaning.
                                        </ServicesText>
                                    </li>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Surface Repairs.
                                        </ServicesText>
                                    </li>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Inside heels repair.
                                        </ServicesText>
                                    </li>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Golden Goose Sole Repairs.
                                        </ServicesText>
                                    </li>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Full Sole Replacement.
                                        </ServicesText>
                                    </li>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Replace worn-out or damaged soles with new ones (depending on model and
                                            availability).
                                        </ServicesText>
                                    </li>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Replacement of insoles.
                                        </ServicesText>
                                    </li>
                                    <li>
                                        <ServicesText variant={'variant2'} className={''}>
                                            Lace Replacement.
                                        </ServicesText>
                                    </li>
                                </ul>
                            </div>
                            <ServicesText variant={'variant2'} className={''}>
                                *pricing varies based on the specific
                                repairs and customization needed.
                            </ServicesText>
                        </div>
                    </MobileCard>
                    <MobileCard
                        textLeft={'/ Shoe Stretching Service'}
                        textRight={'From 50 GEL'}
                        bgImageUrl={'/images/services/shoes/bg-mobile-5.png'}
                    >
                        <div className={'flex flex-col gap-4 p-6'}>
                            <ServicesText variant={'variant2'} className={''}>
                                Our shoe stretching service is designed to provide a comfortable fit by slightly
                                increasing the length or width of your shoes without compromising their structure.
                            </ServicesText>
                            <div>
                                <ServicesText variant={'variant2'} className={'uppercase'}>
                                    Service May Include:
                                </ServicesText>
                                <ServicesText variant={'variant2'} className={''}>
                                    Slight increase in length or width: Gentle stretching to accommodate more room for
                                    your feet, perfect for tight-fitting shoes.
                                </ServicesText>
                            </div>
                            <ServicesText variant={'variant2'} className={''}>
                                *per pair of shoes.
                            </ServicesText>
                        </div>
                    </MobileCard>
                    <MobileCard
                        textLeft={'/ Patent Leather Heel Replacement'}
                        textRight={'From 50 GEL'}
                        bgImageUrl={'/images/services/shoes/bg-mobile-6.png'}
                    >
                        <div className={'flex flex-col gap-4 p-6'}>
                            <ServicesText variant={'variant2'} className={''}>
                                Our Patent Leather Heel Replacement service focuses on restoring shoes with worn or
                                damaged patent leather heels to their original elegance.
                            </ServicesText>
                            <ServicesText variant={'variant2'} className={''}>
                                We meticulously replace the old leather with new, premium patent leather, ensuring a
                                flawless finish that matches the shoe’s original look.
                            </ServicesText>
                            <ServicesText variant={'variant2'} className={''}>
                                *per pair of shoes.
                            </ServicesText>
                        </div>
                    </MobileCard>
                    <MobileCard
                        textLeft={'/ Golden Goose Sole Repair Service'}
                        textRight={'From 250 GEL'}
                        bgImageUrl={'/images/services/shoes/bg-mobile-7.png'}
                    >
                        <div className={'flex flex-col gap-4 p-6'}>
                            <ServicesText variant={'variant2'} className={''}>
                                Service includes: Restoration of Golden Goose soles and replacement of worn soles with
                                high-quality rubber full soles.
                            </ServicesText>
                            <ServicesText variant={'variant2'} className={''}>
                                Service involves only resoling the shoes, without additional cleaning or restoration.
                            </ServicesText>
                            <ServicesText variant={'variant2'} className={''}>
                                *per pair of shoes.
                            </ServicesText>
                        </div>
                    </MobileCard>
                </div>
            ) : (
                <div className={'flex flex-col gap-20'}>
                    <CardDesktop
                    bgImageUrl={'/images/services/shoes/bg-1.png'}
                    textLeft={'/ Leather Shoe Restoration Service'}
                    textRight={'Our leather shoe restoration service is designed to bring new life to your cherished footwear while preserving the integrity of the leather.'}
                    price={'200-250'}
                    >
                        <div className={'relative flex-1 pt-[130px] px-20'}>
                            <ServicesText variant={'variant2'} className={''}>
                                *per pair of shoes depending on the extent of the work required.
                            </ServicesText>
                            <ul className={'absolute top-[-80px] left-0 right-0 flex flex-1 gap-7 px-20'}>
                                <BoxContainer>
                                    <>
                                        <p className={'font-light text-[14px] leading-[150%] tracking-[0.1em] uppercase'}>
                                            Service Includes:
                                        </p>
                                        <ul className={'list-disc pl-4'}>
                                            <li>
                                                <ServicesText variant={'variant2'} className={'!capitalize'}>
                                                    Delicate cleaning of the shoes, both inside and outside.
                                                </ServicesText>
                                            </li>
                                            <li>
                                                <ServicesText variant={'variant2'} className={'!capitalize'}>
                                                    Dyeing and moisturizing of suede/nubuck to restore color and softness.
                                                </ServicesText>
                                            </li>
                                        </ul>
                                    </>
                                </BoxContainer>
                                <BoxContainer>
                                    <>
                                        <ServicesText variant={'variant2'} className={'!capitalize'}>
                                            Service Does Not Include:
                                        </ServicesText>
                                        <ul className={'list-disc pl-4'}>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                Restoration or repairs to the soles.
                                                </ServicesText>
                                            </li>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                Replacement of laces.
                                                </ServicesText>
                                            </li>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Restoration or repairs to the interior of the shoes.
                                                </ServicesText>
                                            </li>
                                        </ul>
                                    </>
                                </BoxContainer>
                            </ul>
                        </div>
                    </CardDesktop>

                    <CardDesktop
                    bgImageUrl={'/images/services/shoes/bg-2.png'}
                    textLeft={'/ Suede Restoration Service'}
                    textRight={'Our leather shoe restoration service is designed to bring new life to your cherished footwear while preserving the integrity of the leather.'}
                    price={'200-250'}
                    >
                        <div className={'relative flex-1 pt-[130px] px-20'}>
                            <ServicesText variant={'variant2'} className={''}>
                                *per pair of shoes depending on the extent of the work required.
                            </ServicesText>
                            <ul className={'absolute top-[-80px] left-0 right-0 flex flex-1 gap-7 px-20'}>
                                <BoxContainer>
                                    <>
                                        <ServicesText variant={'variant2'} className={'uppercase'}>
                                            Service Includes:
                                        </ServicesText>
                                        <ul className={'list-disc pl-4'}>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Delicate cleaning of the shoes, both inside and outside.
                                                </ServicesText>
                                            </li>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Dyeing and moisturizing of suede/nubuck to restore color and softness.
                                                </ServicesText>
                                            </li>
                                        </ul>
                                    </>
                                </BoxContainer>
                                <BoxContainer>
                                    <>
                                        <ServicesText variant={'variant2'} className={'uppercase'}>
                                            Service Does Not Include:
                                        </ServicesText>
                                        <ul className={'list-disc pl-4'}>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Restoration or repairs to the soles.
                                                </ServicesText>
                                            </li>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Replacement of laces.
                                                </ServicesText>
                                            </li>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Restoration or repairs to the interior of the shoes.
                                                </ServicesText>
                                            </li>
                                        </ul>
                                    </>
                                </BoxContainer>
                            </ul>
                        </div>
                    </CardDesktop>

                    <CardDesktop
                    bgImageUrl={'/images/services/shoes/bg-3.png'}
                    textLeft={'/ Metallic Leather Shoe Restoration Service'}
                    textRight={'Our metallic leather shoe restoration service is crafted to renew the appearance of your shoes while protecting the delicate metallic finish.'}
                    price={'300-350'}
                    >
                        <div className={'relative flex-1 pt-[130px] px-20'}>
                            <ServicesText variant={'variant2'} className={''}>
                                *per pair of shoes depending on the extent of the work required.
                            </ServicesText>
                            <ul className={'absolute top-[-80px] left-0 right-0 flex flex-1 gap-7 px-20'}>
                                <BoxContainer>
                                    <>
                                        <ServicesText variant={'variant2'} className={'uppercase'}>
                                            Service Includes:
                                        </ServicesText>
                                        <ul className={'list-disc pl-4'}>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Delicate cleaning of the shoes, both inside and outside.
                                                </ServicesText>
                                            </li>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Restoration and moisturization of damaged areas on the leather surface to preserve the metallic sheen.
                                                </ServicesText>
                                            </li>
                                        </ul>
                                    </>
                                </BoxContainer>
                                <BoxContainer>
                                    <>
                                        <ServicesText variant={'variant2'} className={'uppercase'}>
                                            Service Does Not Include:
                                        </ServicesText>
                                        <ul className={'list-disc pl-4'}>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Restoration or repairs to the soles.
                                                </ServicesText>
                                            </li>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Replacement of laces.
                                                </ServicesText>
                                            </li>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Restoration or repairs to the interior of the shoes.
                                                </ServicesText>
                                            </li>
                                        </ul>
                                    </>
                                </BoxContainer>
                            </ul>
                        </div>
                    </CardDesktop>

                    <CardDesktop
                    bgImageUrl={'/images/services/shoes/bg-4.png'}
                    textLeft={'/ Sneaker Repair & Restoration Service'}
                    textRight={'Our sneaker repair service covers a wide range\n' +
                        'of needs, from cleaning to extensive restoration. Whether you need basic repairs or a full refresh, we\'ve got your sneakers covered!'}
                    price={'*'}
                    >
                        <div className={'relative flex-1 pt-[130px] px-20'}>
                            <ServicesText variant={'variant2'} className={''}>
                                *pricing varies based on the specific repairs and customization needed.
                            </ServicesText>
                            <ul className={'absolute top-[-80px] left-0 right-0 flex flex-1 gap-7 px-20'}>
                                <BoxContainer>
                                    <>
                                        <ServicesText variant={'variant2'} className={'uppercase'}>
                                            Service May Include:
                                        </ServicesText>
                                        <ul className={'list-disc pl-4'}>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Deep Cleaning.
                                                </ServicesText>
                                            </li>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Surface Repairs.
                                                </ServicesText>
                                            </li>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Inside heels repair
                                                </ServicesText>
                                            </li>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Golden Goose Sole Repairs.
                                                </ServicesText>
                                            </li>
                                        </ul>
                                    </>
                                </BoxContainer>
                                <BoxContainer>
                                    <>
                                        <ul className={'list-disc pl-4'}>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Full Sole Replacement:
                                                </ServicesText>
                                            </li>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Replace worn-out or damaged soles with new ones (depending on model and availability).
                                                </ServicesText>
                                            </li>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Replacement of insoles
                                                </ServicesText>
                                            </li>
                                            <li>
                                                <ServicesText variant={'variant2'} className={''}>
                                                    Lace Replacement.
                                                </ServicesText>
                                            </li>
                                        </ul>
                                    </>
                                </BoxContainer>
                            </ul>
                        </div>
                    </CardDesktop>

                    <CardDesktop
                        bgImageUrl={'/images/services/shoes/bg-5.png'}
                        textLeft={'/ Shoe Stretching Service'}
                        textRight={''}
                        price={'from 50'}
                    >
                        <div className={'relative flex-1 pt-[130px] px-20'}>
                            <ServicesText variant={'variant2'} className={''}>
                                *per pair of shoes.
                            </ServicesText>
                            <ul className={'absolute top-[-80px] left-0 right-0 flex flex-1 gap-7 px-20'}>
                                <BoxContainer>
                                    <ServicesText variant={'variant2'} className={''}>
                                        Our shoe stretching service is designed to provide a comfortable fit by
                                        slightly increasing the length or width of your shoes without compromising
                                        their structure.
                                    </ServicesText>
                                </BoxContainer>
                                <BoxContainer>
                                    <>
                                        <ServicesText variant={'variant2'} className={'uppercase'}>
                                            Service Does Not Include:
                                        </ServicesText>
                                        <ServicesText variant={'variant2'} className={'!capitalize'}>
                                            Slight increase in length or width: Gentle stretching to accommodate more
                                            room for your feet, perfect for tight-fitting shoes.
                                        </ServicesText>
                                    </>
                                </BoxContainer>
                            </ul>
                        </div>
                    </CardDesktop>

                    <CardDesktop
                        bgImageUrl={'/images/services/shoes/bg-6.png'}
                        textLeft={'/ Patent Leather Heel Replacement'}
                        textRight={''}
                        price={'from 50'}
                    >
                        <div className={'relative flex-1 pt-[130px] px-20'}>
                            <ServicesText variant={'variant2'} className={''}>
                                *per pair of shoes.
                            </ServicesText>
                            <ul className={'absolute top-[-80px] left-0 right-0 flex flex-1 gap-7 px-20'}>
                                <BoxContainer>
                                    <ServicesText variant={'variant2'} className={''}>
                                        Our Patent Leather Heel Replacement service focuses on restoring shoes with worn
                                        or damaged patent leather heels to their original elegance.
                                    </ServicesText>
                                </BoxContainer>
                                <BoxContainer>
                                    <ServicesText variant={'variant2'} className={''}>
                                        We meticulously replace the old leather with new, premium patent leather,
                                        ensuring a flawless finish that matches the shoe’s original look.
                                    </ServicesText>
                                </BoxContainer>
                            </ul>
                        </div>
                    </CardDesktop>

                    <CardDesktop
                        bgImageUrl={'/images/services/shoes/bg-7.png'}
                        textLeft={'/ Golden Goose Sole Repair Service'}
                        textRight={''}
                        price={'from 250'}
                    >
                        <div className={'relative flex-1 pt-[130px] px-20'}>
                            <ServicesText variant={'variant2'} className={''}>
                                *per pair of shoes.
                            </ServicesText>
                            <ul className={'absolute top-[-80px] left-0 right-0 flex flex-1 gap-7 px-20'}>
                                <BoxContainer>
                                    <ServicesText variant={'variant2'} className={''}>
                                        Service includes: Restoration of Golden Goose soles and replacement of worn
                                        soles with high-quality rubber full soles.
                                    </ServicesText>
                                </BoxContainer>
                                <BoxContainer>
                                    <ServicesText variant={'variant2'} className={''}>
                                        Service involves only resoling the shoes, without additional cleaning or
                                        restoration.
                                    </ServicesText>
                                </BoxContainer>
                            </ul>
                        </div>
                    </CardDesktop>
                </div>
            )}
        </Card>
    );
};

export default ShoeRestorationServices;