import Hero from './Hero.tsx';
import ExperienceBanner from './ExperienceBanner.tsx';
import Team from './Team.tsx';
import MissionStatement from './MissionStatement.tsx';
import Review from './Review.tsx';
import ThanksMessage from './ThanksMessage.tsx';
import VisitInfo from './VisitInfo.tsx';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ExperienceBanner />
      <Team />
      <MissionStatement />
      <Review />
      <ThanksMessage />
      <VisitInfo />
    </>
  );
};

export default HomePage;
