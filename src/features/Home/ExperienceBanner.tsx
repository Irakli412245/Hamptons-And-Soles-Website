import Title from './components/Title.tsx';
import Card from './components/Card.tsx';
import Text from './components/Text.tsx';
import { useTranslation } from 'react-i18next';

const ExperienceBanner = () => {
  const { t } = useTranslation('home');
  return (
    <Card type={'content'} className={'gap-10 pt-20 bg-secondary-bg'}>
      <Title className={'table:max-w-[783px]'}>
        {t('experience.title')}
      </Title>
      <span className={'block w-full h-[0.5px] bg-primary-cl table:max-w-[414px]'}></span>
      <Text className={'block max-w-[280px] table:max-w-[530px]'}>
        {t('experience.brands')}
      </Text>
    </Card>
  );
};

export default ExperienceBanner;
