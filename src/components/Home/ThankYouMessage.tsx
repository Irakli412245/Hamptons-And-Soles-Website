import Card from "./components/Card.tsx";
import CardTitle from "./components/CardTitle.tsx";
import thanksImage  from "../../../public/images/home/thanks/thanks-message.png";
import thanksImageMobile from "../../../public/images/home/thanks/thanks-message-mobile.png"
import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";

const ThankYouMessage = () => {
    const {width} = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <Card type={'images'} className={'bg-secondary-bg'}>
            <CardTitle type={'h3'} className={'max-w-[233px] mb-[70px]'}>
                Seeing your tags inspires us! Thank you for your trust!
            </CardTitle>
            <div
                className="flex justify-center items-center w-full h-[240px] table:h-[810px] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${isMobile ? thanksImageMobile : thanksImage})`
                }}
            >
            </div>
        </Card>
    );
};

export default ThankYouMessage;