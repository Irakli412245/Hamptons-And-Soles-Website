import Card from "./components/Card.tsx";
import CardTitle from "./components/CardTitle.tsx";
import React from "react";
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
                <div className={'absolute top-[-10px] left-[-10px] z-10 px-1.5 py-1 border-[0.5px] border-primary-cl rounded-full bg-secondary-bg'}>
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

const LuxuryShoesBenefits = () => {
    return (
        <Card className={''}>
            <CardTitle className={'mb-[60px] table:mb-[100px]'}>
                Why Choose Casali Soles for Your Luxury Shoes?
            </CardTitle>
            <MobileCard
                className={'mb-7'}
                title={'Perfect Color Match'}
                description={'One of the standout features of Casali soles is their wide variety of colors, designed to match the original sole color of luxury shoes. Unlike many generic sole protectors, Casali soles are made specifically to blend seamlessly with designer shoe brands. The color-matching capability ensures that the beauty of your luxury shoes is not compromised, but enhanced.'}
                order={1}
            />
            <MobileCard
                className={'mb-7'}
                title={'Elegance with Functionality'}
                description={'Casali soles are not only protective but also aesthetically pleasing. Their sleek, mirror or silk -like finish enhances the shoe’s appearance while providing superior durability. With these soles, you can keep your shoes looking pristine without sacrificing style.'}
                order={2}
            />
            <MobileCard
                className={'mb-7'}
                title={'Customization and Precision'}
                description={'At Hamptons & Soles, we take pride in tailoring each Casali sole to your specific shoe. Our craftsmen ensure that the color, fit, and style are a perfect match for your shoes, making the protective sole nearly invisible while adding extra wear protection.'}
                order={3}
            />
            <MobileCard
                className={'mb-7'}
                title={'Perfect for High-End Shoes'}
                description={'Casali soles are trusted by luxury shoe owners worldwide because they are designed to meet the high standards of top designer brands. Whether you own Louboutins, Jimmy Choos, Chanel, Hermes or Valentino shoes, Casali soles preserve the elegance and original craftsmanship of your footwear.'}
                order={4}
            />
        </Card>
    );
};

export default LuxuryShoesBenefits;