import Card from './components/Card.tsx';
import Title from './components/Title.tsx';
import { useWindowDimensions } from '../../hooks/useWindowDimensions.tsx';

const Us = () => {
  const { width } = useWindowDimensions();
  const isTable = width >= 768;

  return (
    <Card type={'image'} className={'gap-[60px] table:gap-[100px]'}>
      <Title className={''}>About us</Title>
      {!isTable ? (
        <div className={'flex flex-col gap-2.5'}>
          <img
            src={'/images/about/us/about_us_img_1_mob.png'}
            alt={'team photo'}
            className={'block w-full h-auto'}
          />
          <div className={'flex gap-2.5'}>
            <img
              src={'/images/about/us/about_us_img_2_mob.png'}
              alt={'team photo'}
              className={'block w-1/2 h-auto'}
            />
            <img
              src={'/images/about/us/about_us_img_3_mob.png'}
              alt={'team photo'}
              className={'block w-1/2 h-auto'}
            />
          </div>
        </div>
      ) : (
        <div className="flex gap-5 w-full">
          <img
            src="/images/about/us/about_us_img_2.png"
            alt="team photo"
            className="block w-[calc(30%-10px)] object-cover"
          />
          <img
            src="/images/about/us/about_us_img_1.png"
            alt="team photo"
            className="block w-[calc(40%-20px)] object-cover"
          />
          <img
            src="/images/about/us/about_us_img_3.png"
            alt="team photo"
            className="block w-[calc(30%-10px)] object-cover"
          />
        </div>
      )}
    </Card>
  );
};

export default Us;
