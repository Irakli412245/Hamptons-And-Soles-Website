import {useEffect} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';

import CompanyLogo from "../../components/Home/CompanyLogo.tsx";
import TrustStatement from "../../components/Home/TrustStatement.tsx";
import MissionStatement from "../../components/Home/MissionStatement.tsx";
import HeroImage from "../../components/Home/HeroImage.tsx";
import ContactSection from "../../components/Home/ContactSection.tsx";
import ReviewsSection from "../../components/Home/ReviewsSection.tsx";


const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
            easing: 'ease-in-out',
            mirror: false,
        })
    }, [])

    return (
        <div>
            <CompanyLogo/>
            <TrustStatement/>
            <MissionStatement/>
            <ReviewsSection/>
            <HeroImage/>
            <ContactSection/>
        </div>
    );
};

export default Home;