import Icon from '../../components/common/Icon.tsx';
import { useWindowDimensions } from '../../hooks/useWindowDimensions.tsx';

const Hero = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <div
      className={
        'bg-[url(/images/home/hero/hero-mob.png)] ' +
        'table:bg-[url(/images/home/hero/hero.png)] ' +
        'w-full h-[700px] table:h-[810px] bg-cover bg-center bg-no-repeat ' +
        'flex flex-col justify-center items-center'
      }
    >
      <Icon
        id={isMobile ? 'slogan_hero' : 'logo_hero'}
        width={isMobile ? 160 : 802}
        height={isMobile ? 45 : 451}
      />
    </div>
  );
};

export default Hero;
