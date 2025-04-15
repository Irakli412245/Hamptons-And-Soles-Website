import ServicesCardImage from "../components/ServicesCardImage.tsx";
import ServicesTitle, {ServicesSubtitle} from "../components/ServicesTitle.tsx";
import Warranty from "./Warranty.tsx";
import ShoeRestorationServices from "./ShoeRestorationServices.tsx";
import CareInstructions from "./CareInstructions.tsx";

import heroImage from '../../../../public/images/services/shoes/hero-image.png'
import heroImageMobile from '../../../../public/images/services/shoes/hero-image-mobile.png'

const Shoes = () => {
    return (
        <div className={'bg-secondary-bg'}>
            <ServicesCardImage
                className={'min-h-[700px] table:min-h-[460px]'}
                imageUrl={heroImage}
                imageUrlMobile={heroImageMobile}
            >
                <div className={'flex flex-col justify-center items-center gap-6'}>
                    <ServicesTitle className={''}>
                        Shoes
                    </ServicesTitle>
                    <span className={'block w-[100px] table:w-[140px] h-[0.5px] bg-primary-cl'}></span>
                    <ServicesSubtitle>
                        Restore
                        <br/>
                        the Beauty
                    </ServicesSubtitle>
                </div>
            </ServicesCardImage>
            <Warranty/>
            <ShoeRestorationServices/>
            <CareInstructions/>
        </div>
    );
};

export default Shoes;