import Hero from "./Hero.tsx";
import Team from "./Team.tsx";
import TrustStatement from "./TrustStatement.tsx";
import Mission from "./Mission.tsx";
import Reviews from "./Reviews.tsx";
import ThankYouMessage from "./ThankYouMessage.tsx";
import Contacts from "./Contacts.tsx";

const Home = () => {
    return (
        <div className={'flex flex-1 flex-col'}>
            <Hero/>
            <TrustStatement/>
            <Team/>
            <Mission/>
            <Reviews/>
            <ThankYouMessage/>
            <Contacts/>
        </div>
    );
};

export default Home;