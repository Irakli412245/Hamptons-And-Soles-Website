import Card from './components/Card.tsx';
import Title from './components/Title.tsx';
import EmblaCarousel from './components/EmblaCarousel.tsx';
import { useTranslation } from 'react-i18next';

const reviewImages = [
  '/images/home/reviews/review-1.png',
  '/images/home/reviews/review-2.png',
  '/images/home/reviews/review-3.png',
  '/images/home/reviews/review-4.png',
  '/images/home/reviews/review-5.png',
  '/images/home/reviews/review-6.png',
  '/images/home/reviews/review-7.png',
  '/images/home/reviews/review-8.png',
  '/images/home/reviews/review-9.png',
  '/images/home/reviews/review-10.png',
  '/images/home/reviews/review-11.png',
];

const Review = () => {
  const { t } = useTranslation('home');
  return (
    <Card
      type={'image'}
      className={
        'flex flex-col gap-20 table:gap-[70px] bg-[linear-gradient(to_bottom,_#330000_60%,_#000000_40%)] table:bg-[linear-gradient(to_bottom,_#000000_100%,_#330000_0%)]'
      }
    >
      <div className={'flex items-center w-full gap-6'}>
        <span className={'block w-full h-[0.5px] bg-primary-cl'}></span>
        <Title className={''}>{t('review.title')}</Title>
        <span className={'block w-full h-[0.5px] bg-primary-cl'}></span>
      </div>
      <EmblaCarousel sliders={reviewImages} direction={'ltr'} imageW={206} imageH={364} />
    </Card>
  );
};

export default Review;
