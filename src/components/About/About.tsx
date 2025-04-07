import 'aos/dist/aos.css';

import Hero from "./Hero.tsx";
import AboutCompany from "./AboutCompany.tsx";
import AboutUs from "./AboutUs.tsx";
import Advantages from "./Advantages.tsx";

const About = () => {
    return (
        <section className={'bg-secondary-bg'}>
            <Hero/>
            <AboutCompany/>
            <AboutUs/>
            <Advantages/>
        </section>
    );
};

export default About; 