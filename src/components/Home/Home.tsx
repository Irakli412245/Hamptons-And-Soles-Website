import Hero from "./Hero.tsx";
import TrustStatement from "./TrustStatement.tsx";
import Team from "./Team.tsx";

const Home = () => {
    return (
        <div className={'flex flex-1 flex-col'}>
            <Hero/>
            <TrustStatement/>
            <Team/>
        </div>
    );
};

export default Home;