import Hero from './Hero.tsx';
import Company from './Company.tsx';

const AboutPage = () => {
  return (
    <div className={' flex flex-col bg-secondary-bg'}>
      <Hero />
      <Company />
    </div>
  );
};

export default AboutPage;
