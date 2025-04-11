import Hero from "./Hero.tsx";
import Card from "./components/Card.tsx";

import cardImage1 from '../../../../public/images/services/delicateCleaning/card-img-mobile-1.png';
import cardImage2 from '../../../../public/images/services/delicateCleaning/card-img-mobile-2.png';
import cardImage3 from '../../../../public/images/services/delicateCleaning/card-img-mobile-3.png';
import cardImage4 from '../../../../public/images/services/delicateCleaning/card-img-mobile-4.png';
import cardImage5 from '../../../../public/images/services/delicateCleaning/card-img-mobile-5.png';

const DelicateCleaning = () => {
    return (
        <div className={'bg-secondary-bg'}>
            <Hero/>
            <div className={'flex flex-col gap-9 p-7 table:gap-[42px] table:p-[100px]'}>
                <Card
                    className={''}
                    price={'100-120'}
                    imageUrl={cardImage1}
                    title={'Shoes Delicate Cleaning Service'}
                >
                    <p>
                        Our Delicate Cleaning Service is designed for luxury shoes and delicate materials. We use
                        gentle hand-cleaning methods and premium, low pH cleaners, ensuring a thorough yet safe clean
                        with no risk of damage. After cleaning, we condition the leather to maintain its softness.
                    </p>
                </Card>
                <Card
                    className={''}
                    price={'50'}
                    imageUrl={cardImage2}
                    title={'Men\'s Classic Shoes Basic Care Service'}
                >
                    <div className={'flex flex-col gap-4'}>
                        <p>
                            Our Basic Care Service for men’s classic shoes is designed to maintain the elegance and
                            longevity of your footwear.
                        </p>
                        <p>
                            <span className={'uppercase'}>This service includes:</span>
                            <br/>
                            Cleaning, condition and polish.
                        </p>
                        <p>
                            In every step of the process, we use only Saphir cosmetics, guaranteeing the best care for
                            your classic shoes.
                        </p>
                    </div>
                </Card>
                <Card
                    className={''}
                    price={'50'}
                    imageUrl={cardImage3}
                    title={'Shoes Standart Dry Cleaning Service'}
                >
                    <div className={'flex flex-col gap-4'}>
                        <p>
                            Service tailored for budget-friendly sneakers and shoes made from durable materials. This
                            service is ideal for items that are not delicate and can withstand machine cleaning,
                            ensuring a thorough and efficient clean without compromising quality.
                        </p>
                        <p>
                            This service is perfect for those looking to refresh their everyday footwear without the
                            need for specialized care.
                        </p>
                    </div>
                </Card>
                <Card
                    className={''}
                    price={'from 150'}
                    imageUrl={cardImage4}
                    title={'Bags Delicate Cleaning Service'}
                >
                    <div className={'flex flex-col gap-4'}>
                        <p>
                            Our Bags Delicate Cleaning Service is meticulously designed for luxury bags and delicate
                            materials. We specialize in gentle, hand-cleaning techniques that ensure your bags receive
                            the utmost care without the risk of damage.
                        </p>
                        <p>
                            After cleaning, we always condition the leather to restore its softness and enhance its
                            natural luster.
                        </p>
                    </div>
                </Card>
                <Card
                    className={''}
                    price={'100-150'}
                    imageUrl={cardImage5}
                    title={'Delicate Cleaning Service for Leather Jacket'}
                >
                    <div className={'flex flex-col'}>
                        <p className={'uppercase mb-2'}>
                            Service includes:
                        </p>
                        <ul className={'flex flex-col gap-1 list-disc pl-4'}>
                            <li>
                                <span className={'font-semibold'}>Hand Cleaning:</span> Using only the highest-quality,
                                specialized leather cleaners, we carefully hand-clean your jacket without any risk of
                                damage.
                            </li>
                            <li>
                                <span className={'font-semibold'}>Conditioning:</span> After cleaning, we apply a
                                premium leather conditioner to restore moisture and maintain the suppleness of the
                                leather, preventing drying or cracking.
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default DelicateCleaning;