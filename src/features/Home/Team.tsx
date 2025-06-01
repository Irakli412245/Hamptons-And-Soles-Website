import EmblaCarousel from './components/EmblaCarousel.tsx';
import Card from './components/Card.tsx';
import { useWindowDimensions } from '../../hooks/useWindowDimensions.tsx';
import { useTranslation } from 'react-i18next';

const teamPhotos = [
  '/images/home/team/team-1.png',
  '/images/home/team/team-2.png',
  '/images/home/team/team-3.png',
  '/images/home/team/team-4.png',
  '/images/home/team/team-5.png',
  '/images/home/team/team-6.png',
  '/images/home/team/team-7.png',
  '/images/home/team/team-8.png',
];

const Team = () => {
  const { t } = useTranslation('home');
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const topImages = [] as string[];
  const bottomImages = [] as string[];

  teamPhotos.map((el, index) => {
    if (index <= 3) {
      topImages.push(el);
    } else {
      bottomImages.push(el);
    }
  });

  return (
    <Card
      type={'image'}
      className={
        'flex flex-col gap-5 bg-[linear-gradient(to_bottom,_#000000_70%,_#330000_30%)] table:bg-[linear-gradient(to_bottom,_#000000_100%,_#330000_0%)]'
      }
    >
      <h2 className="font-seasons text-[24px] table:text-[36px] text-[#fc9] mb-8 uppercase text-center">
        {t('team.title')}
      </h2>
      {isMobile ? (
        <>
          <EmblaCarousel sliders={topImages} direction={'rtl'} imageW={300} imageH={200} />
          <EmblaCarousel sliders={bottomImages} direction={'ltr'} imageW={300} imageH={200} />
        </>
      ) : (
        <EmblaCarousel sliders={teamPhotos} direction={'ltr'} imageW={510} imageH={340} />
      )}
    </Card>
  );
};

export default Team;
