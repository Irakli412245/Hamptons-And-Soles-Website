import Hero from "./Hero.tsx";
import Warranty from "./Warranty.tsx";
import ShoeRestorationServices from "./ShoeRestorationServices.tsx";
import CareInstructions from "./CareInstructions.tsx";

const Shoes = () => {
    return (
        <div className={'bg-secondary-bg'}>
            <Hero/>
            <Warranty/>
            <ShoeRestorationServices/>
            <CareInstructions/>
        </div>
    );
};

export default Shoes;