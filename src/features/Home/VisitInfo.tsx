import Card from './components/Card.tsx';
import Title from './components/Title.tsx';
import Text from './components/Text.tsx';
import Icon from '../../components/common/Icon.tsx';

import { useWindowDimensions } from '../../hooks/useWindowDimensions.tsx';
import { useTranslation } from 'react-i18next';

const VisitInfo = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const { t } = useTranslation('home');

  return (
    <Card
      type={'content'}
      className={'bg-secondary-bg gap-20 table:gap-[70px] pb-20 table:pb-[150px]'}
    >
      <Title className={''}>{t('visit.title')}</Title>
      {isMobile ? (
        <div className={'grid grid-cols-1 gap-[60px]'}>
          <div className={'flex flex-col gap-[30px] pl-3 py-1 border-l-[0.5px] border-primary-cl'}>
            <div className={'flex items-center gap-[19px]'}>
              <Icon id={'mark'} width={20} height={20} />
              <Text className={'max-w-[220px] !text-start'}>{t('visit.address1')}</Text>
            </div>
            <div className={'flex flex-col gap-2'}>
              <div className={'flex items-center gap-[19px]'}>
                <Icon id={'time'} width={20} height={20} />
                <Text className={'max-w-[220px] !text-start'}>{t('visit.hours1')}</Text>
              </div>
              <div className={'flex items-center gap-[19px]'}>
                <Icon id={'time'} width={20} height={20} />
                <Text className={'max-w-[220px] !text-start'}>{t('visit.hours2')}</Text>
              </div>
            </div>
            <div className={'flex items-center gap-[19px]'}>
              <Icon id={'phone'} width={20} height={20} />
              <Text className={'max-w-full !text-start'}>{t('visit.phone1')}</Text>
            </div>
          </div>
          <div className={'flex flex-col gap-[30px] pl-3 py-1 border-l-[0.5px] border-primary-cl'}>
            <div className={'flex items-center gap-[19px]'}>
              <Icon id={'mark'} width={20} height={20} />
              <Text className={'max-w-[252px] !text-start'}>{t('visit.address2')}</Text>
            </div>
            <div className={'flex flex-col gap-2'}>
              <div className={'flex items-center gap-[19px]'}>
                <Icon id={'time'} width={20} height={20} />
                <Text className={'max-w-[220px] !text-start'}>{t('visit.hours3')}</Text>
              </div>
            </div>
            <div className={'flex items-center gap-[19px]'}>
              <Icon id={'phone'} width={20} height={20} />
              <Text className={'max-w-full !text-start'}>{t('visit.phone2')}</Text>
            </div>
          </div>
          <div className={'flex flex-col gap-[30px]'}>
            <div className={'flex items-center gap-[19px]'}>
              <Icon id={'car-delivery'} width={24} height={24} />
              <Text className={'max-w-[242px] !text-start'}>{t('visit.delivery')}</Text>
            </div>
            <div className={'flex items-center gap-[19px]'}>
              <Icon id={'delivery'} width={24} height={24} />
              <Text className={'max-w-[240px] !text-start'}>{t('visit.email')}</Text>
            </div>
          </div>
        </div>
      ) : (
        <div className={'flex flex-col gap-[70px]'}>
          <div className={'flex gap-10'}>
            <div className={'flex flex-col justify-between gap-[30px] py-1'}>
              <div className={'flex items-center justify-end gap-[19px]'}>
                <Text className={'max-w-[289px] !text-end'}>{t('visit.address2')}</Text>
                <Icon id={'mark'} width={20} height={20} />
              </div>
              <div className={'flex flex-col gap-2'}>
                <div className={'flex items-center justify-end gap-[19px]'}>
                  <Text className={'max-w-[220px] !text-start'}>{t('visit.hours3')}</Text>
                  <Icon id={'time'} width={20} height={20} />
                </div>
              </div>
              <div className={'flex items-center justify-end gap-[19px]'}>
                <Text className={'w-auto !text-start'}>{t('visit.phone2')}</Text>
                <Icon id={'phone'} width={20} height={20} />
              </div>
            </div>
            <div className={'w-[0.5px] bg-primary-cl h-auto'}></div>
            <div className={'flex flex-col justify-between gap-[30px] py-1'}>
              <div className={'flex items-center gap-[19px]'}>
                <Icon id={'mark'} width={20} height={20} />
                <Text className={'max-w-[220px] !text-start'}>{t('visit.address1')}</Text>
              </div>
              <div className={'flex flex-col gap-2'}>
                <div className={'flex items-center gap-[19px]'}>
                  <Icon id={'time'} width={20} height={20} />
                  <Text className={'max-w-[220px] !text-start'}>{t('visit.hours1')}</Text>
                </div>
                <div className={'flex items-center gap-[19px]'}>
                  <Icon id={'time'} width={20} height={20} />
                  <Text className={'max-w-[220px] !text-start'}>{t('visit.hours2')}</Text>
                </div>
              </div>
              <div className={'flex items-center gap-[19px]'}>
                <Icon id={'phone'} width={20} height={20} />
                <Text className={'w-auto !text-start'}>{t('visit.phone1')}</Text>
              </div>
            </div>
          </div>
          <div className={'flex flex-col items-center gap-1'}>
            <div className={'flex items-center gap-[19px]'}>
              <Icon id={'car-delivery'} width={24} height={24} />
              <Text className={''}>{t('visit.delivery')}</Text>
            </div>
            <div className={'flex items-center gap-[19px]'}>
              <Icon id={'delivery'} width={24} height={24} />
              <Text className={''}>{t('visit.email')}</Text>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default VisitInfo;
