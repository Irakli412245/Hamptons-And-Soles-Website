import Card from "./components/Card.tsx";
import CardTitle from "./components/CardTitle.tsx";

const TrustStatement = () => {
    return (
        <Card type={'content'} className={'gap-10 table:gap-12 pt-20 table:pt-72 bg-secondary-bg'}>
            <CardTitle type={'h2'} className={'max-w-[316px]'}>
                Since 2017, we've had the honor of restoring for over 20,000 of your beloved items from finest luxury brands
            </CardTitle>
            <div className={'w-[200px] h-[0.5px] bg-primary-cl'}></div>
            <CardTitle type={'h3'} className={'max-w-303px'}>
                gucci | Balenciaga | Chanel dior | Louis Vuitton | Fendi Saint Laurent | Prada Hermès | and more
            </CardTitle>
        </Card>
    );
};

export default TrustStatement;