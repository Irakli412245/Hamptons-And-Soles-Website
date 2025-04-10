import Card from "./components/Card.tsx";
import CardTitle from "./components/CardTitle.tsx";

import {useWindowDimensions} from "../../../hooks/useWindowDimensions.tsx";

import imageFirst from '../../../../public/images/services/shoes/image-mobile-1.png';
import imageSecond from '../../../../public/images/services/shoes/image-mobile-2.png';
import imageThird from '../../../../public/images/services/shoes/image-mobile-3.png';
import imageTabletFirst from '../../../../public/images/services/shoes/image-1.png';
import imageTabletSecond from '../../../../public/images/services/shoes/image-2.png';
import imageTabletThird from '../../../../public/images/services/shoes/image-3.png';
import React from "react";

interface IList {
    title: string;
    supTitle?: string;
    listTitle?: string;
    items?: {
        title: string;
        text: string;
    }[];
    shoeCareInstructionsMessage?: string;
    careInstructionsWarning?: string;
}

interface IDesktopListProps {
    title?: string;
    supTitle?: string;
    listTitle?: string;
    shoeCareInstructionsMessage?: string;
    careInstructionsWarning?: string;
    cleaning?: string;
    moisturizing?: string;
    waterRepellentTreatment?: string;
}

const instructions: IList[] = [
    {
        title: '/ Leather Shoe / sneakers Care Instructions',
        supTitle: 'Leather shoes require special care to maintain their appearance and durability.',
        listTitle: 'Follow these steps for optimal maintenance:',
        items: [
            {
                title: 'Cleaning:',
                text: 'Use a soft brush to remove dirt and dust from your leather shoes. For deeper cleaning, apply a specialized cleaner such Tarrago Cleaning Foam. This product effectively lift dirt without damaging the leather.',
            },
            {
                title: 'Moisturizing:',
                text: 'To maintain leather’s suppleness and prevent cracking, regular moisturizing is crucial. We recommend Saphir Crème 1925, Saphir Crème Universelle, or Saphir Crème Surfine. These premium moisturizers nourish the leather, enhancing its natural beauty and prolonging its durability.',
            },
        ],
        careInstructionsWarning: 'Never clean with wet wipes, water, wet cloth or toothpaste! It damages the shoes! Remember, improper maintenance is void of warranty!',
    },
    {
        title: '/ Suede Shoe Care Instructions',
        supTitle: 'Suede shoes require special attention.',
        listTitle: 'Follow these steps for optimal care:',
        items: [
            {
                title: 'Cleaning:',
                text: 'Use a special suede brush or a suede eraser to gently remove dirt from the surface. For deeper cleaning, apply Saphir Omnidaim, Tarrago Cleaning Foam or Colourlock Shoe Cleaner, which are specially formulated for suede.',
            },
            {
                title: 'Water-Repellent Treatment:',
                text: 'Regular use of a water-repellent spray is essential to protect suede from moisture and prevent it from drying out and peeling. We recommend Saphir Invulner or Tarrago Waterproofing Spray to create a barrier against water and stains.',
            },
            {
                title: 'Moisturizing:',
                text: 'To keep the suede soft and supple, consider using Saphir Suede Renovator or Tarrago Nubuck & Suede Renovator. These products help maintain the natural oils in the suede, preventing it from becoming brittle.',
            },
        ],
        shoeCareInstructionsMessage: 'By following these care instructions, you can ensure that your suede shoes remain in excellent condition and retain their luxurious look.',
        careInstructionsWarning: 'Never clean with wet wipes, water, wet cloth or toothpaste! It damages the shoes! Remember, improper maintenance is void of warranty!',
    },
    ]

const DesktopList: React.FC<IDesktopListProps> = ({
                                                      title,
                                                      supTitle,
                                                      listTitle,
                                                      careInstructionsWarning,
                                                      shoeCareInstructionsMessage,
                                                      moisturizing,
                                                      cleaning,
                                                      waterRepellentTreatment,
                                                  }) => {
    return (
        <div className={'px-[100px] table:mb-20'}>
            <p className={'mb-10 font-semibold text-[20px] leading-[140%] uppercase'}>
                {title}
            </p>
            <div
                className={'flex flex-1 gap-10 font-semibold text-[14px] leading-[140%] tracking-[0.1em]'}
            >
                <div className={'flex flex-1 flex-col gap-6 pl-10 border-l-[0.5px] border-primary-cl'}>
                    <p className={''}>
                        {supTitle}
                    </p>
                    <p className={''}>
                        {listTitle}
                    </p>
                    <p className={''}>
                        1. Cleaning:
                        {' '}
                        <span className={'font-light'}>
                            {cleaning}
                        </span>
                    </p>
                    {waterRepellentTreatment && (
                        <p className={''}>
                            2. Water-Repellent Treatment:
                            {' '}
                            <span className={'font-light'}>
                            {cleaning}
                        </span>
                        </p>
                    )}
                </div>
                <div className={'flex flex-1 flex-col gap-6 pl-10 border-l-[0.5px] border-primary-cl'}>
                    <p className={''}>
                        {waterRepellentTreatment ? 3 : 2}. Moisturizing:
                        {' '}
                        <span className={'font-light'}>
                            {moisturizing}
                        </span>
                    </p>
                    {shoeCareInstructionsMessage && (<p>{shoeCareInstructionsMessage}</p>)}
                    <p className={'font-medium italic text-[13px] leading-[140%] uppercase'}>
                        {careInstructionsWarning}
                    </p>
                </div>
            </div>
        </div>
    );
}

const CareInstructions = () => {
    const {width} = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <Card className={'!px-0'}>
            <CardTitle className={'!text-left table:!text-center mb-[60px] table:mb-20 px-[30px]'}>
                Care instructions
            </CardTitle>
            <img src={isMobile ? imageFirst: imageTabletFirst} alt={'image shoes'} className={'w-full h-[400px] table:h-[420px] object-cover mb-10 table:mb-20'}/>
            {isMobile ? (
                <div className={'border-l-[0.5px] border-primary-cl mx-[30px] pl-4 mb-10'}>
                <p className={'font-semibold text-[16px] leading-[140%] uppercase mb-6'}>
                    / Leather Shoe / sneakers Care Instructions
                </p>
                <div className={'flex flex-col gap-4 mb-6 font-semibold text-[13px] leading-[140%] tracking-[0.1em]'}>
                    <p>
                        Leather shoes require special care
                        to maintain their appearance and durability.
                    </p>
                    <p>
                        Follow these steps for optimal maintenance:
                    </p>
                    <ul className={'flex flex-col gap-4 list-decimal pl-4'}>
                        <li>
                            <p>Cleaning:
                                {' '}
                                <span className={'font-light'}>
                                Use a soft brush to remove dirt and dust from your leather shoes. For deeper cleaning,
                                apply a specialized cleaner such Tarrago Cleaning Foam. This product effectively lift
                                dirt without damaging the leather.
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>Moisturizing:
                                {' '}
                                <span className={'font-light'}>
                                To maintain leather’s suppleness and prevent cracking, regular moisturizing is crucial.
                                    We recommend Saphir Crème 1925, Saphir Crème Universelle, or Saphir Crème Surfine.
                                    These premium moisturizers nourish the leather, enhancing its natural beauty and
                                    prolonging its durability.
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
                <p className={'font-light italic text-[13px] leading-[140%] uppercase'}>
                    Never clean with wet wipes, water, wet cloth or toothpaste! It damages the shoes! Remember,
                    improper maintenance is void of warranty!
                </p>
            </div>
            ) : (
                <DesktopList
                    title={instructions[0]?.title || ''}
                    supTitle={instructions[0].supTitle || ''}
                    listTitle={instructions[0].listTitle || ''}
                    cleaning={instructions[0].items?.[0].text || ''}
                    moisturizing={instructions[0].items?.[1].text || ''}
                    careInstructionsWarning={instructions[0].careInstructionsWarning || ''}
                />
            )}
            <img src={isMobile ? imageSecond : imageTabletSecond} alt={'image shoes'} className={'w-full h-[400px] table:h-[420px] object-cover mb-10 table:mb-20'}/>
            {isMobile ? (
                <div className={'border-l-[0.5px] border-primary-cl mx-[30px] pl-4 mb-10 table:mb-20'}>
                <p className={'font-semibold text-[16px] leading-[140%] uppercase mb-6'}>
                    / Suede Shoe Care Instructions
                </p>
                <div className={'flex flex-col gap-4 mb-6 font-semibold text-[13px] leading-[140%] tracking-[0.1em]'}>
                    <p>
                        Suede shoes require special attention. Follow these steps for optimal care:
                    </p>
                    <ul className={'flex flex-col gap-4 list-decimal pl-4'}>
                        <li>
                            <p>Cleaning:
                                {' '}
                                <span className={'font-light'}>
                                    Use a special suede brush or a suede eraser to gently remove dirt from the surface. For
                                    deeper cleaning, apply Saphir Omnidaim, Tarrago Cleaning Foam or Colourlock Shoe
                                    Cleaner, which are specially formulated for suede.
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>Water-Repellent Treatment:
                                {' '}
                                <span className={'font-light'}>
                                    Regular use of a water-repellent spray is essential to protect suede from moisture and
                                    prevent it from drying out and peeling. We recommend Saphir Invulner or Tarrago
                                    Waterproofing Spray to create a barrier against water and stains.
                                </span>
                            </p>
                        </li>
                        <li>
                            <p>Moisturizing
                                {' '}
                                <span className={'font-light'}>
                                    To keep the suede soft and supple, consider using Saphir Suede Renovator or Tarrago
                                    Nubuck & Suede Renovator. These products help maintain the natural oils in the
                                    suede, preventing it from becoming brittle.
                                </span>
                            </p>
                        </li>
                    </ul>
                    <p className={'font-light'}>
                        By following these care instructions, you can ensure that your suede shoes remain in excellent
                        condition and retain their luxurious look.
                    </p>
                </div>
                <p className={'font-light italic text-[13px] leading-[140%] uppercase'}>
                    Never clean with wet wipes, water or wet cloth! It damages the shoes! Remember, improper maintenance
                    is void of warranty!
                </p>
            </div>
            ) : (
                <DesktopList
                    title={instructions[1]?.title || ''}
                    supTitle={instructions[1].supTitle || ''}
                    listTitle={instructions[1].listTitle || ''}
                    cleaning={instructions[1].items?.[0].text || ''}
                    waterRepellentTreatment={instructions[1].items?.[1].text || ''}
                    moisturizing={instructions[1].items?.[2].text || ''}
                    careInstructionsWarning={instructions[1].careInstructionsWarning || ''}
                    shoeCareInstructionsMessage={instructions[1].shoeCareInstructionsMessage || ''}
                />
            )}
            <img src={isMobile ? imageThird : imageTabletThird} alt={'image shoes'} className={'w-full h-[400px] table:h-[420px] object-cover mb-10 table:mb-20'}/>
        </Card>
    );
};

export default CareInstructions;