import Hero from './Hero.tsx';
import Company from './Company.tsx';
import Us from './Us.tsx';

const AboutPage = () => {
  return (
    <div className={' flex flex-col bg-secondary-bg'}>
      <Hero />
      <Company />
      <Us />
    </div>
  );
};

export default AboutPage;
