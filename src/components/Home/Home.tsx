import CompanyLogo from "./CompanyLogo.tsx";
import TrustStatement from "./TrustStatement.tsx";
import MissionStatement from "./MissionStatement.tsx";
import ReviewsSection from "./ReviewsSection.tsx";
import HeroImage from "./HeroImage.tsx";
import ContactSection from "./ContactSection.tsx";


const Home = () => {
    return (
        <>
            <CompanyLogo/>
            <TrustStatement/>
            <MissionStatement/>
            <ReviewsSection/>
            <HeroImage/>
            <ContactSection/>
        </>
    );
};

export default Home;