import Card from './components/Card.tsx';
import Title from './components/Title.tsx';
import ServiceCard from './components/ServiceCard.tsx';
import { useTranslation } from 'react-i18next';

const MissionStatement = () => {
  const { t } = useTranslation('home');
  return (
    <Card type={'content'} className={'gap-20 table:gap-[70px] '}>
      <Title className={'max-w-[921px]'}>
        {t('mission.title')}
      </Title>
      <Title className={''}>{t('mission.text')}</Title>
      <div className={'grid grid-cols-1 table:grid-cols-2 gap-2.5 table:gap-x-[70px]'}>
        <ServiceCard text={t('mission.services.shoe_restoration')} iconId={'shoes'} />
        <ServiceCard text={t('mission.services.bag_restoration')} iconId={'shopping-cart'} />
        <ServiceCard text={t('mission.services.delicate_hand_cleaning')} iconId={'cleaning'} />
        <ServiceCard text={t('mission.services.protective_soles')} iconId={'soles'} />
        <ServiceCard text={t('mission.services.cobbler_repair')} iconId={'repair'} />
        <ServiceCard text={t('mission.services.golden_goose')} iconId={'star'} />
      </div>
    </Card>
  );
};

export default MissionStatement;
