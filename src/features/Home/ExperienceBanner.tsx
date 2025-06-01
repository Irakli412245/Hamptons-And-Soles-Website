import Title from './components/Title.tsx';
import Card from './components/Card.tsx';
import Text from './components/Text.tsx';

const ExperienceBanner = () => {
  return (
    <Card type={'content'} className={'gap-10 pt-20 bg-secondary-bg'}>
      <Title className={'table:max-w-[783px]'}>
        Since 2017, we've had the honor of restoring for over 20,000 of your beloved items from
        finest luxury brands
      </Title>
      <span className={'block w-full h-[0.5px] bg-primary-cl table:max-w-[414px]'}></span>
      <Text className={'block max-w-[280px] table:max-w-[530px]'}>
        Gucci | Balenciaga | Chanel | Dior | Louis Vuitton | Fendi Saint Laurent | Prada | Hermès |
        and more
      </Text>
    </Card>
  );
};

export default ExperienceBanner;
