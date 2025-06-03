import Hero from './Hero.tsx';
import Company from './Company.tsx';
import Us from './Us.tsx';
import Advantages from './Advantages.tsx';
import FooterImage from './FooterImage.tsx';

const AboutPage = () => {
  return (
    <div className={'flex flex-col bg-secondary-bg'}>
      <Hero />
      <Company />
      <Us />
      <Advantages />
      <FooterImage />
    </div>
  );
};

export default AboutPage;
