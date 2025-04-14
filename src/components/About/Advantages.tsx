import Card from "./components/Card.tsx";
import CardTitle from "./components/CardTitle.tsx";
import CardText from "./components/CardText.tsx";
import { useTranslation } from 'react-i18next';

import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";

const Advantages = () => {
    const { t } = useTranslation();
    const {width} = useWindowDimensions()
    return (
        <Card className={'pb-[60px] table:pb-[140px]'}>
            <CardTitle className={'!text-left table:!text-center px-6 mb-[60px]'}>
                {t('about.advantages.title')}
            </CardTitle>
            {
                width < 768 ? (
                    <>
                        <ul className={'flex flex-col gap-6 px-[50px] mb-[60px]'}>
                            <li>
                                <CardText className={''}>
                                    {t('about.advantages.noRisk')}
                                </CardText>
                            </li>
                            <li>
                                <CardText className={''}>
                                    {t('about.advantages.meticulous')}
                                </CardText>
                            </li>
                            <li>
                                <CardText className={''}>
                                    {t('about.advantages.satisfaction')}
                                </CardText>
                            </li>
                        </ul>
                        <div className={'w-full min-h-[130px] mb-[60px]'}>
                            <img src={'/images/about/advantages/advantages.png'} className={'w-full h-full '}/>
                        </div>
                        <ul className={'flex flex-col gap-6 px-[50px]'}>
                            <li>
                                <CardText className={''}>
                                    {t('about.advantages.timeNeeded')}
                                </CardText>
                            </li>
                            <li>
                                <CardText className={''}>
                                    {t('about.advantages.commitment')}
                                </CardText>
                            </li>
                        </ul>
                    </>
                ) : (
                    <div className={'flex flex-col gap-[100px] px-[100px] desktop:px-[200px]'}>
                        <ul className={'flex gap-10'}>
                            <li>
                                <CardText className={''}>
                                    {t('about.advantages.noRisk')}
                                </CardText>
                            </li>
                            <li>
                                <CardText className={''}>
                                    {t('about.advantages.meticulous')} {t('about.advantages.satisfaction')}
                                </CardText>
                            </li>
                        </ul>
                        <div className={'w-full min-h-[335px] mb-[60px]'}>
                            <img src={'/images/about/advantages/advantages.png'} className={'w-full h-full '}/>
                        </div>
                        <ul className={'flex gap-10'}>
                            <li className={'flex-1'}>
                                <CardText className={''}>
                                    {t('about.advantages.timeNeeded')}
                                </CardText>
                            </li>
                            <li className={'flex-1'}>
                                <CardText className={''}>
                                    {t('about.advantages.commitment')}
                                </CardText>
                            </li>
                        </ul>
                    </div>
                )
            }
        </Card>
    );
};

export default Advantages;