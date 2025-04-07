import Card from "./components/Card.tsx";

import aboutCompany1 from '../../../public/images/about/company/about-company-1.png'
import aboutCompany2 from '../../../public/images/about/company/about-company-2.png'
import CardTitle from "./components/CardTitle.tsx";
import CardText from "./components/CardText.tsx";
import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";

const AboutCompany = () => {
    const {width} = useWindowDimensions()

    return (
        <Card className={'pt-[60px] table:pt-[140px]'}>
            <CardTitle className={'flex flex-col table:block mb-[60px] table:mb-[100px] px-10'}>
                {width <= 600 ? (
                    <>
                        <span className="text-left table:text-center">About</span>
                        <span className="text-right table:text-center">company</span>
                    </>
                ) : (
                    'About company'
                )
                }

            </CardTitle>
            {
                width < 768 ? (
                    <ul className={'flex flex-col'}>
                        <li>
                            <img src={aboutCompany1} className={'w-full h-[140px]'}/>
                            <CardText className={'flex flex-col gap-4 p-[50px]'}>
                                <>
                            <span>
                                The Origin of the Company Name Hamptons & Soles takes its name from Northampton, England, a town
                                with a rich history of producing high-quality footwear. Notable brands such as John Lobb, Edward
                                Green, Church’s, and Loake all hail from this region.
                            </span>
                                    <span>
                                So Northampton inspired the first part of our name, "Hamptons." "Soles" refers to shoe soles,
                                emphasizing our belief that the care and restoration of shoes should begin with their soles
                            </span>
                                </>
                            </CardText>
                        </li>
                        <li>
                            <img src={aboutCompany2} className={'w-full h-[140px]'}/>
                            <CardText className={'flex flex-col gap-4 p-[50px]'}>
                                <>
                            <span>
                                Since shoe care and restoration begin with protecting the soles, we are proud to be the
                                first restoration salon in Georgia to introduce the culture of beautiful and aesthetic
                                sole dressing. We have partnered with Casali, an Italian manufacturer of premium
                                protective soles.
                            </span>
                                    <span>
                                Casali produces high-quality soles specifically designed for branded shoes,
                                characterized by their thin profile, exceptional aesthetics, and a wide range of colors
                                that perfectly match the soles of luxury footwear.
                            </span>
                                </>
                            </CardText>
                        </li>
                    </ul>
                ) : (
                    <ul className={'flex flex-col gap-10'}>
                        <li className={'flex gap-4'}>
                            <CardText className={'p-10'}>
                                The Origin of the Company Name Hamptons & Soles takes its name from Northampton,
                                England, a town
                                with a rich history of producing high-quality footwear. Notable brands such as John
                                Lobb, Edward
                                Green, Church’s, and Loake all hail from this region. So Northampton inspired the first
                                part of
                                our name, "Hamptons." "Soles" refers to shoe soles, emphasizing our belief that the care
                                and
                                restoration of shoes should begin with their soles.
                            </CardText>
                            <img src={aboutCompany1} className={'w-1/2 h-[240px]'}/>
                        </li>
                        <li className={'flex gap-4'}>
                            <img src={aboutCompany2} className={'w-1/2 h-[240px]'}/>
                            <CardText className={'p-10'}>
                                Since shoe care and restoration begin with protecting the soles, we are proud to be the
                                first
                                restoration salon in Georgia to introduce the culture of beautiful and aesthetic sole
                                dressing.
                                We have partnered with Casali, an Italian manufacturer of premium protective soles.
                                Casali
                                produces high-quality soles specifically designed for branded shoes, characterized by
                                their thin
                                profile, exceptional aesthetics, and a wide range of colors that perfectly match the
                                soles of
                                luxury footwear.
                            </CardText>
                        </li>
                    </ul>
                )
            }
        </Card>
    );
};

export default AboutCompany;