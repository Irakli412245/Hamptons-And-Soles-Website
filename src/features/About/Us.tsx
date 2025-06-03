import Card from './components/Card.tsx';
import Title from './components/Title.tsx';
import Text from './components/Text.tsx';

import { useWindowDimensions } from '../../hooks/useWindowDimensions.tsx';

const images = [
  '/images/about/us/about_us_team_1.png',
  '/images/about/us/about_us_team_2.png',
  '/images/about/us/about_us_team_3.png',
  '/images/about/us/about_us_team_4.png',
  '/images/about/us/about_us_team_5.png',
  '/images/about/us/about_us_team_6.png',
];

const Us = () => {
  const { width } = useWindowDimensions();
  const isTable = width >= 768;

  return (
    <Card type={'image'} className={'gap-[60px] table:gap-[100px]'}>
      <Title className={''}>About us</Title>
      {!isTable ? (
        <>
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
          <div className={'flex flex-col gap-3.5 px-[50px]'}>
            <Text className={''}>
              We specialize in leather/suede professional restoration and delicate hand cleaning of
              luxury items. Our journey began in 2017 when we studied restoration techniques at
              Colourlock (lederzentrum) in Germany and later becoming their official representatives
              in Georgia.
            </Text>
            <Text className={''}>
              Since then, we have completed five additional training programs with leading European
              restoration services and cosmetics manufacturers.
            </Text>
          </div>
          <div className={'grid grid-cols-2 gap-2.5'}>
            {images.map((image) => (
              <img src={image} alt="team photo" key={image} className={'block w-auto h-auto'} />
            ))}
          </div>
          <div className={'flex flex-col gap-3.5 px-[50px]'}>
            <Text className={''}>
              As certified specialists, we focus on luxury brands. Our extensive expertise in luxury
              restoration allows us to adapt our restoration methods and products to address the
              unique requirements of each brand and model.
            </Text>
            <Text className={''}>
              We use various premium-grade cleaning and restoration products, including French
              Saphir Medal D’or, which is highly recommended and used by some of the most
              prestigious luxury brands, including: Louis Vuitton, Burberry, John Lobb, Hermes, and
              Berlutti, etc.
            </Text>
          </div>
        </>
      ) : (
        <>
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
          <div className={'flex gap-5 pl-[100px]'}>
            <Text className={'flex flex-1'}>
              We specialize in leather/suede professional restoration and delicate hand cleaning of
              luxury items. Our journey began in 2017 when we studied restoration techniques at
              Colourlock (lederzentrum) in Germany and later becoming their official representatives
              in Georgia.
            </Text>
            <Text className={'flex flex-1'}>
              Since then, we have completed five additional training programs with leading European
              restoration services and cosmetics manufacturers.
            </Text>
            <span className={'relative flex flex-1 h-[0.5px] bg-primary-cl'}>
              <span className="absolute w-1 h-1 bg-primary-cl left-0 top-1/2 transform -translate-y-1/2 rotate-45"></span>
            </span>
          </div>
          <div>
            <div className={'pl-[100px]'}>
              <span className={'relative flex flex-1 h-[0.5px] bg-primary-cl'}>
                <span className="absolute w-1 h-1 bg-primary-cl left-0 top-1/2 transform -translate-y-1/2 rotate-45"></span>
              </span>
              <div className={'grid grid-cols-3 gap-5 pr-[100px]'}>
                {images.map((image) => (
                  <img src={image} alt="team photo" key={image} className={'block w-auto h-auto'} />
                ))}
              </div>
            </div>
            <span className={'relative flex mr-[100px] h-[0.5px] bg-primary-cl'}>
              <span className="absolute w-1 h-1 bg-primary-cl right-0 top-1/2 transform -translate-y-1/2 rotate-45"></span>
            </span>
          </div>
          <div className={'flex gap-5 pr-[100px]'}>
            <span className={'relative flex flex-1 h-[0.5px] bg-primary-cl'}>
              <span className="absolute w-1 h-1 bg-primary-cl right-0 top-1/2 transform -translate-y-1/2 rotate-45"></span>
            </span>
            <Text className={'flex flex-1'}>
              As certified specialists, we focus on luxury brands. Our extensive expertise in luxury
              restoration allows us to adapt our restoration methods and products to address the
              unique requirements of each brand and model.
            </Text>
            <Text className={'flex flex-1'}>
              We use various premium-grade cleaning and restoration products, including French
              Saphir Medal D’or, which is highly recommended and used by some of the most
              prestigious luxury brands, including: Louis Vuitton, Burberry, John Lobb, Hermes, and
              Berlutti, etc.
            </Text>
          </div>
        </>
      )}
    </Card>
  );
};

export default Us;
