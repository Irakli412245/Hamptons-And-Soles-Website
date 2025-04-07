import Card from "./components/Card.tsx";
import CardTitle from "./components/CardTitle.tsx";
import CardText from "./components/CardText.tsx";
import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";

const AboutUs = () => {
    const {width} = useWindowDimensions()

    return (
        <Card className={''}>
            <CardTitle className={'mb-[60px] table:mb-[100px]'}>
                About us
            </CardTitle>
            {
                width < 768 && (
                    <>
                        <CardText className={'flex flex-col gap-4 px-10 mb-[60px]'}>
                            <>
                    <span>
                        We specialize in leather/suede professional restoration and delicate hand cleaning of luxury
                        items. Our journey began in 2017 when we studied restoration techniques at Colourlock
                        (lederzentrum) in Germany and later becoming their official representatives in Georgia.
                    </span>
                                <span>
                        Since then, we have completed five additional training programs with leading European
                        restoration services and cosmetics manufacturers.
                    </span>
                            </>
                        </CardText>
                        <div className="grid grid-cols-2 gap-4 px-4 mb-[60px]">
                            <div className="flex flex-col gap-4">
                                <div className="h-[280px] w-full">
                                    <img
                                        src={"/images/about/us/image1.png"}
                                        alt="Luxury shoe buckle"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="h-[200px] w-full">
                                    <img
                                        src={"/images/about/us/image3.png"}
                                        alt="Our team"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="h-[200px] w-full">
                                    <img
                                        src={"/images/about/us/image2.png"}
                                        alt="Professional shoe cleaning"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="h-[280px] w-full">
                                    <img
                                        src={"/images/about/us/image4.png"}
                                        alt="Hamptons & Soles bell"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <CardText className={'flex flex-col gap-4 px-10 mb-[60px]'}>
                            As certified specialists, we focus on luxury brands. Our extensive expertise in luxury
                            restoration
                            allows us to adapt our restoration methods and products to address the unique requirements of
                            each brand
                            and model.
                        </CardText>
                        <div className="grid grid-cols-2 gap-4 lg:gap-6 px-4 lg:px-10 mb-[60px]">
                            <div className="flex flex-col gap-4">
                                <div className="h-[168px] w-full">
                                    <img
                                        src={"/images/about/us/image5.png"}
                                        alt="Luxury shoe buckle"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="h-[168px] w-full">
                                    <img
                                        src={"/images/about/us/image6.png"}
                                        alt="Luxury shoe buckle"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="h-[168px] w-full">
                                    <img
                                        src={"/images/about/us/image7.png"}
                                        alt="Luxury shoe buckle"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="h-[330px] w-full">
                                    <img
                                        src={"/images/about/us/image8.png"}
                                        alt="Professional shoe cleaning"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="h-[190px] w-full">
                                    <img
                                        src={"/images/about/us/image9.png"}
                                        alt="Hamptons & Soles bell"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <CardText className={'flex flex-col gap-4 px-10'}>
                            We use various premium-grade cleaning and restoration products, including French Saphir Medal
                            D’or,
                            which is highly recommended and used by some of the most prestigious luxury brands, including:
                            Louis
                            Vuitton, Burberry, John Lobb, Hermes, and Berlutti, etc.
                        </CardText>
                    </>
                )
            }

            {
                width >= 768 && (
                    <>
                        <ul className={'relative flex gap-10 table:gap-20 px-20 table:px-40 mb-[140px]'}>
                            <li className={''}>
                                <CardText className={''}>
                                    We specialize in leather/suede professional restoration and delicate hand cleaning of
                                    luxury items. Our journey began in 2017 when we studied restoration techniques at
                                    Colourlock (lederzentrum) in Germany and later becoming their official representatives
                                    in Georgia. Since then, we have completed five additional training programs with leading
                                    European restoration services and cosmetics manufacturers.
                                </CardText>
                            </li>
                            <li className={''}>
                                <CardText className={'pt-10'}>
                                    As certified specialists, we focus on luxury brands. Our extensive expertise in luxury
                                    restoration allows us to adapt our restoration methods and products to address the
                                    unique requirements of each brand and model.
                                </CardText>
                            </li>
                            <li>
                                <CardText className={'pt-24'}>
                                    We use various premium-grade cleaning and restoration products, including French Saphir
                                    Medal D’or, which is highly recommended and used by some of the most prestigious luxury
                                    brands, including: Louis Vuitton, Burberry, John Lobb, Hermes, and Berlutti, etc.
                                </CardText>
                            </li>
                        </ul>
                        <div className={'grid grid-cols-4 gap-7'}>
                            <div className={'flex flex-col gap-7'}>
                                <div>
                                    <img
                                        src={"/images/about/us/image1.png"}
                                        alt="Hamptons & Soles bell"
                                        className="w-full h-[422px] object-cover"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={"/images/about/us/image2.png"}
                                        alt="Hamptons & Soles bell"
                                        className="w-full h-[238px] object-cover"
                                    />
                                </div>
                            </div>
                            <div className={'flex flex-col gap-7'}>
                                <div>
                                    <img
                                        src={"/images/about/us/image3.png"}
                                        alt="Hamptons & Soles bell"
                                        className="w-full h-[238px] object-cover"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={"/images/about/us/image4.png"}
                                        alt="Hamptons & Soles bell"
                                        className="w-full h-[422px] object-cover"
                                    />
                                </div>
                            </div>
                            <div className={'flex flex-col gap-7'}>
                                <div>
                                    <img
                                        src={"/images/about/us/image5.png"}
                                        alt="Hamptons & Soles bell"
                                        className="w-full h-[211px] object-cover"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={"/images/about/us/image6.png"}
                                        alt="Hamptons & Soles bell"
                                        className="w-full h-[211px] object-cover"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={"/images/about/us/image7.png"}
                                        alt="Hamptons & Soles bell"
                                        className="w-full h-[211px] object-cover"
                                    />
                                </div>
                            </div>
                            <div className={'flex flex-col gap-7'}>
                                <div>
                                    <img
                                        src={"/images/about/us/image8.png"}
                                        alt="Hamptons & Soles bell"
                                        className="w-full h-[422px] object-cover"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={"/images/about/us/image9.png"}
                                        alt="Hamptons & Soles bell"
                                        className="w-full h-[238px] object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </Card>
    );
};

export default AboutUs;