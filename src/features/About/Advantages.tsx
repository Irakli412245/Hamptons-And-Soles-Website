import Card from './components/Card.tsx';
import Title from './components/Title.tsx';
import { useWindowDimensions } from '../../hooks/useWindowDimensions.tsx';
import Text from './components/Text.tsx';

const Advantages = () => {
  const { width } = useWindowDimensions();
  const isMobile = width <= 574;

  return (
    <Card type={'content'} className={'gap-[60px] table:gap-[100px]'}>
      {isMobile ? (
        <Title className={''}>
          <span className={'block text-start'}>Our</span>
          <span className={'block text-end'}>advantages</span>
        </Title>
      ) : (
        <Title className={'px-[30px]'}>Our advantages</Title>
      )}
      <div className="grid grid-cols-1 table:grid-cols-3 gap-[60px] table:gap-x-[20px] table:gap-y-[60px]">
        <div className={'flex flex-col gap-[30px]'}>
          <Text className={'items-center gap-5 font-normal uppercase'}>
            <span className={'relative flex w-[30px] h-[0.5px] bg-primary-cl'}>
              <span className="absolute w-1 h-1 bg-primary-cl right-0 top-1/2 transform -translate-y-1/2 rotate-45"></span>
            </span>
            No Risk of Damage
          </Text>
          <Text className={''}>
            Our process guarantees zero damage — no risk of damage during the cleaning and
            restoration of your items.
          </Text>
        </div>
        <div className={'flex flex-col gap-[30px]'}>
          <Text className={'items-center gap-5 font-normal uppercase'}>
            <span className={'relative flex w-[30px] h-[0.5px] bg-primary-cl'}>
              <span className="absolute w-1 h-1 bg-primary-cl right-0 top-1/2 transform -translate-y-1/2 rotate-45"></span>
            </span>
            Delicate Hand Cleaning Only
          </Text>
          <Text className={''}>
            Every item is carefully cleaned by hand — never machine-washed — to preserve texture,
            color, and quality.
          </Text>
        </div>
        <div className={'flex flex-col gap-[30px]'}>
          <Text className={'items-center gap-5 font-normal uppercase'}>
            <span className={'relative flex w-[30px] h-[0.5px] bg-primary-cl'}>
              <span className="absolute w-1 h-1 bg-primary-cl right-0 top-1/2 transform -translate-y-1/2 rotate-45"></span>
            </span>
            Premium Products Only
          </Text>
          <Text className={''}>
            We work only with world-renowned brands like Saphir Médaille d'Or and Colourlock for
            professional, safe, and lasting results.
          </Text>
        </div>
        <div className={'flex flex-col gap-[30px]'}>
          <Text className={'items-center gap-5 font-normal uppercase'}>
            <span className={'relative flex w-[30px] h-[0.5px] bg-primary-cl'}>
              <span className="absolute w-1 h-1 bg-primary-cl right-0 top-1/2 transform -translate-y-1/2 rotate-45"></span>
            </span>
            Sole Protection Expertise
          </Text>
          <Text className={''}>
            As the first salon in Georgia to introduce luxury sole dressing, we exclusively use
            Casali Italian soles to preserve elegance and extend wear.
          </Text>
        </div>
        <div className={'flex flex-col gap-[30px]'}>
          <Text className={'items-center gap-5 font-normal uppercase'}>
            <span className={'relative flex w-[30px] h-[0.5px] bg-primary-cl'}>
              <span className="absolute w-1 h-1 bg-primary-cl right-0 top-1/2 transform -translate-y-1/2 rotate-45"></span>
            </span>
            Convenience & Comfort
          </Text>
          <Text className={''}>
            Two central locations in Tbilisi, extended hours, and city pickup & delivery ensure your
            experience is seamless and stress-free.
          </Text>
        </div>
        <div className={'flex flex-col gap-[30px]'}>
          <Text className={'items-center gap-5 font-normal uppercase'}>
            <span className={'relative flex w-[30px] h-[0.5px] bg-primary-cl'}>
              <span className="absolute w-1 h-1 bg-primary-cl right-0 top-1/2 transform -translate-y-1/2 rotate-45"></span>
            </span>
            Satisfaction Guaranteed
          </Text>
          <Text className={''}>
            If you’re not fully satisfied, we’ll make the necessary adjustments — always with the
            utmost care and without risking any damage to your item.
          </Text>
        </div>
      </div>
    </Card>
  );
};

export default Advantages;
