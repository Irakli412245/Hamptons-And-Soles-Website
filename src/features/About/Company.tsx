import Card from './components/Card.tsx';
import Title from './components/Title.tsx';
import { useWindowDimensions } from '../../hooks/useWindowDimensions.tsx';
import Text from './components/Text.tsx';

const Company = () => {
  const { width } = useWindowDimensions();
  const isMobile = width <= 574;

  return (
    <Card type={'image'} className={'gap-[60px] table:gap-[100px] pt-[60px] table:pt-[100px]'}>
      {isMobile ? (
        <Title className={'px-[30px]'}>
          <span className={'block text-start'}>About</span>
          <span className={'block text-end'}>company</span>
        </Title>
      ) : (
        <Title className={'px-[30px]'}>About company</Title>
      )}
      <div>
        <div className={'flex flex-col'}>
          <img
            src={'/images/about/company/about_company_image_1_mob.png'}
            alt={'carter jonas northampton estate agents'}
            className={'block w-full h-[160px]'}
          />
          <div
            className={
              'flex flex-col gap-3.5 py-[60px] px-[50px] desktop:p-[100px] table:border-t-[0.5px] border-primary-cl'
            }
          >
            <Text className={''}>
              The Origin of the Company Name Hamptons & Soles takes its name from Northampton,
              England, a town with a rich history of producing high-quality footwear. Notable brands
              such as John Lobb, Edward Green, Church’s, and Loake all hail from this region.
            </Text>
            <Text className={''}>
              So Northampton inspired the first part of our name, "Hamptons." "Soles" refers to shoe
              soles, emphasizing our belief that the care and restoration of shoes should begin with
              their soles.
            </Text>
          </div>
        </div>
        <div className={'flex flex-col'}>
          <img
            src={'/images/about/company/about_company_image_2_mob.png'}
            alt={'carter jonas northampton estate agents'}
            className={'block w-full h-[160px]'}
          />
          <div
            className={
              'flex flex-col gap-3.5 py-[60px] px-[50px] desktop:p-[100px] table:border-t-[0.5px] border-primary-cl'
            }
          >
            <Text className={''}>
              Since proper shoe care begins with protecting the soles, we are proud to be the first
              restoration salon in Georgia to introduce the culture of aesthetic and elegant sole
              protection.
            </Text>
            <Text className={''}>
              We have partnered with Casali, the renowned Italian manufacturer of premium protective
              soles, to offer our clients unmatched style and durability.
            </Text>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Company;
