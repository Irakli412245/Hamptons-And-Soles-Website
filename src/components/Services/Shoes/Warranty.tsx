import Card from "./components/Card.tsx";
import CardSubTitle from "./components/CardSubTitle.tsx";
import CardText from "./components/CardText.tsx";
import Icon from "../../UI/Icon.tsx";
import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";
import ServicesTitle from "../components/ServicesTitle.tsx";
import ServicesText from "../components/ServicesText.tsx";

const Warranty = () => {
    const {width} = useWindowDimensions()
    const isMobile = width < 768;

    return (
        <Card className={'pt-[60px] table:pt-[100px]'}>
            <ServicesTitle className={'mb-10 table:mb-20'}>
                Warranty
            </ServicesTitle>
            <ServicesText variant={'variant6'} className={'max-w-4xl mb-10 table:mb-20 '}>
                Thank you for choosing our shoe restoration service! We take pride in our work and want you to be fully
                satisfied with the results.
            </ServicesText>
            {isMobile ? (
                <ul className={'flex flex-col pb-8'}>
                    <li className={'relative pl-6 pb-10'}>
                        <div>
                            <Icon id={'circle'} width={16} height={16} className={'absolute top-[7px] left-[-7.5px] z-10'}/>
                            <div className={'absolute top-[7px] bottom-0 left-0 w-[0.5px] bg-primary-cl'}></div>
                        </div>
                        <ServicesText variant={'variant6'} className="!text-left mb-5">
                            Warranty Coverage:
                        </ServicesText>
                        <ServicesText variant={'variant2'} className={''}>
                            Warranty covers the restored paint and finishing on your shoes, ensuring that the restored areas
                            remain intact under normal wear conditions, for a period of 30 days from the date of
                            restoration.
                        </ServicesText>
                    </li>
                    <li className={'relative pl-6 pb-10'}>
                        <div>
                            <Icon id={'circle'} width={16} height={16} className={'absolute top-[7px] left-[-7.5px] z-10'}/>
                            <div className={'absolute top-0 bottom-0 left-0 w-[0.5px] bg-primary-cl'}></div>
                        </div>
                        <ServicesText variant={'variant6'} className="!text-left mb-5">
                            Conditions:
                            <br/>
                            Proper Maintenance
                        </ServicesText>
                        <ServicesText variant={'variant2'} className={''}>
                            The warranty applies only if the shoes have been maintained as per our care instructions
                            provided at the time of restoration. Neglecting care guidelines may void the warranty.
                        </ServicesText>
                    </li>
                    <li className={'relative pl-6 pb-10'}>
                        <div>
                            <Icon id={'circle'} width={16} height={16} className={'absolute top-[7px] left-[-7.5px] z-10'}/>
                            <div className={'absolute top-0 bottom-0 left-0 w-[0.5px] bg-primary-cl'}></div>
                        </div>
                        <ServicesText variant={'variant6'} className="!text-left mb-5">
                            Exclusions. The warranty does not cover:
                        </ServicesText>
                        <ServicesText variant={'variant2'} className={''}>
                            Normal wear and tear (e.g., scuffs, abrasions, sole wear).
                        </ServicesText>
                        <ul className={'pl-6 list-decimal'}>
                            <li className={''}>
                                <ServicesText variant={'variant2'} className={''}>
                                    Damage caused by improper care or maintenance.
                                </ServicesText>
                            </li>
                            <li className={''}>
                                <ServicesText variant={'variant2'} className={''}>
                                    Restoration on areas other than the paint (e.g., sole repairs, stitching).
                                </ServicesText>
                            </li>
                            <li className={''}>
                                <ServicesText variant={'variant2'} className={''}>
                                    Shoes exposed to extreme conditions beyond normal use.
                                </ServicesText>
                            </li>
                        </ul>
                    </li>
                    <li className={'relative pl-6 pb-1'}>
                        <div>
                            <Icon id={'circle'} width={16} height={16} className={'absolute top-[7px] left-[-7.5px] z-10'}/>
                            <div className={'absolute top-0 bottom-0 left-0 w-[0.5px] bg-primary-cl'}></div>
                        </div>
                        <CardSubTitle className="!text-left mb-5">
                            Warranty Claims:
                        </CardSubTitle>
                        <ServicesText variant={'variant2'} className={''}>
                            If any issue arises with the restored paint within the warranty period:
                        </ServicesText>
                        <ul className={'pl-6 list-decimal'}>
                            <li className={''}>
                                <ServicesText variant={'variant2'} className={''}>
                                    Contact us immediately with your proof of service.
                                </ServicesText>
                            </li>
                            <li className={''}>
                                <ServicesText variant={'variant2'} className={''}>
                                    We will inspect the shoes and, if the damage is covered under this warranty, we will
                                    re-restore the affected area at no additional cost.
                                </ServicesText>
                            </li>
                        </ul>
                    </li>
                </ul>
            ) : (
                <ul className={'flex flex-col justify-center items-center max-w-4xl mb-8'}>
                    <li className={'relative grid grid-cols-2 pb-8'}>
                        <Icon id={'circle'} width={16} height={16} className={'absolute top-[7px] left-1/2 transform -translate-x-1/2 z-10'}/>
                        <div className={'absolute top-[7px] bottom-0 left-1/2 transform -translate-x-1/2 w-[0.5px] bg-primary-cl'}></div>
                        <ServicesText variant={'variant6'} className={'pr-8 !text-right'}>
                            Warranty Coverage:
                        </ServicesText>
                        <ServicesText variant={'variant2'} className={'max-w-xl pl-8'}>
                            Warranty covers the restored paint and finishing on your shoes, ensuring that the restored
                            areas remain intact under normal wear conditions, for a period of 30 days from the date of
                            restoration.
                        </ServicesText>
                    </li>
                    <li className={'relative grid grid-cols-2 pb-8'}>
                        <Icon id={'circle'} width={16} height={16} className={'absolute top-[7px] left-1/2 transform -translate-x-1/2 z-10'}/>
                        <div className={'absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[0.5px] bg-primary-cl'}></div>
                        <ServicesText variant={'variant6'} className={' pr-8 !text-right'}>
                            Conditions:
                            <br/>
                            Proper Maintenance
                        </ServicesText>
                        <ServicesText variant={'variant2'} className={'max-w-xl pl-8'}>
                            The warranty applies only if the shoes have been maintained as per our care instructions
                            provided at the time of restoration. Neglecting care guidelines may void the warranty.
                        </ServicesText>
                    </li>
                    <li className={'relative grid grid-cols-2 pb-8'}>
                        <Icon id={'circle'} width={16} height={16} className={'absolute top-[7px] left-1/2 transform -translate-x-1/2 z-10'}/>
                        <div className={'absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[0.5px] bg-primary-cl'}></div>
                        <ServicesText variant={'variant6'} className={' pr-8 !text-right'}>
                            Exclusions. The warranty
                            <br/>
                            does not cover:
                        </ServicesText>
                        <div>
                        <CardText className={'max-w-xl pl-8'}>
                            Normal wear and tear (e.g., scuffs, abrasions, sole wear).
                        </CardText>
                        <ul className={'pl-16 list-decimal'}>
                            <li className={''}>
                                <ServicesText variant={'variant2'} className={''}>
                                    Damage caused by improper care or maintenance.
                                </ServicesText>
                            </li>
                            <li className={''}>
                                <ServicesText variant={'variant2'} className={''}>
                                    Restoration on areas other than the paint (e.g., sole repairs, stitching).
                                </ServicesText>
                            </li>
                            <li className={''}>
                                <ServicesText variant={'variant2'} className={''}>
                                    Shoes exposed to extreme conditions beyond normal use.
                                </ServicesText>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className={'relative grid grid-cols-2 pb-2'}>
                        <Icon id={'circle'} width={16} height={16} className={'absolute top-[7px] left-1/2 transform -translate-x-1/2 z-10'}/>
                        <div className={'absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[0.5px] bg-primary-cl'}></div>
                        <ServicesText variant={'variant6'} className={' pr-8 !text-right'}>
                            Exclusions. The warranty
                            <br/>
                            does not cover:
                        </ServicesText>
                        <div>
                        <ServicesText variant={'variant2'} className={'max-w-xl pl-8'}>
                            If any issue arises with the restored paint within the warranty period:
                        </ServicesText>
                        <ul className={'pl-16 list-decimal'}>
                            <li className={''}>
                                <ServicesText variant={'variant2'} className={''}>
                                    Contact us immediately with your proof of service.
                                </ServicesText>
                            </li>
                            <li className={''}>
                                <ServicesText variant={'variant2'} className={''}>
                                    We will inspect the shoes and, if the damage is covered under this warranty, we will
                                    re-restore the affected area at no additional cost.
                                </ServicesText>
                            </li>
                        </ul>
                        </div>
                    </li>
                </ul>
            )}
            <ServicesText variant={'variant3'} className="text-center max-w-2xl">
                Note: The warranty covers only the specific parts of the shoes restored during the service. It does not
                cover any new damages or further wear after the restoration.
            </ServicesText>
        </Card>
    );
};

export default Warranty;