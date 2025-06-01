import Card from './Card.tsx';
import Title from './Title.tsx';
import Icon from '../../../components/common/Icon.tsx';
import Text from './Text.tsx';
import { useWindowDimensions } from '../../../hooks/useWindowDimensions.tsx';

const VisitInfo = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <Card
      type={'content'}
      className={'bg-secondary-bg gap-20 table:gap-[70px] pb-20 table:pb-[150px]'}
    >
      <Title className={''}>Visit us</Title>
      {isMobile ? (
        <div className={'grid grid-cols-1 gap-[60px]'}>
          <div className={'flex flex-col gap-[30px] pl-3 py-1 border-l-[0.5px] border-primary-cl'}>
            <div className={'flex items-center gap-[19px]'}>
              <Icon id={'mark'} width={20} height={20} />
              <Text className={'max-w-[220px] !text-start'}>
                5 Brothers Kakabadze Street, Tbilisi, Georgia
              </Text>
            </div>
            <div className={'flex flex-col gap-2'}>
              <div className={'flex items-center gap-[19px]'}>
                <Icon id={'time'} width={20} height={20} />
                <Text className={'max-w-[220px] !text-start'}>Mon–Fri: 10:00 – 19:00</Text>
              </div>
              <div className={'flex items-center gap-[19px]'}>
                <Icon id={'time'} width={20} height={20} />
                <Text className={'max-w-[220px] !text-start'}>Sat–Sun: 11:00 – 18:00</Text>
              </div>
            </div>
            <div className={'flex items-center gap-[19px]'}>
              <Icon id={'phone'} width={20} height={20} />
              <Text className={'max-w-[220px] !text-start'}>Phone: +995 522 22 45 50</Text>
            </div>
          </div>
          <div className={'flex flex-col gap-[30px] pl-3 py-1 border-l-[0.5px] border-primary-cl'}>
            <div className={'flex items-center gap-[19px]'}>
              <Icon id={'mark'} width={20} height={20} />
              <Text className={'max-w-[252px] !text-start'}>
                Axis Towers Shopping Ctr., 37M Ilia Chavchavadze Avenue, Tbilisi, Georgia
              </Text>
            </div>
            <div className={'flex flex-col gap-2'}>
              <div className={'flex items-center gap-[19px]'}>
                <Icon id={'time'} width={20} height={20} />
                <Text className={'max-w-[220px] !text-start'}>Mon–Sun: 10:00 – 22:00</Text>
              </div>
            </div>
            <div className={'flex items-center gap-[19px]'}>
              <Icon id={'phone'} width={20} height={20} />
              <Text className={'max-w-[220px] !text-start'}>Phone: +995 555 17 48 48</Text>
            </div>
          </div>
          <div className={'flex flex-col gap-[30px]'}>
            <div className={'flex items-center gap-[19px]'}>
              <Icon id={'car-delivery'} width={24} height={24} />
              <Text className={'max-w-[242px] !text-start'}>
                Pickup & Delivery Service available city-wide
              </Text>
            </div>
            <div className={'flex items-center gap-[19px]'}>
              <Icon id={'delivery'} width={24} height={24} />
              <Text className={'max-w-[240px] !text-start'}>Info@hamptons.ge</Text>
            </div>
          </div>
        </div>
      ) : (
        <div className={'flex flex-col gap-[70px]'}>
          <div className={'flex gap-10'}>
            <div className={'flex flex-col justify-between gap-[30px] py-1'}>
              <div className={'flex items-center justify-end gap-[19px]'}>
                <Text className={'max-w-[289px] !text-end'}>
                  Axis Towers Shopping Center, 37M Ilia Chavchavadze Avenue, Tbilisi, Georgia
                </Text>
                <Icon id={'mark'} width={20} height={20} />
              </div>
              <div className={'flex flex-col gap-2'}>
                <div className={'flex items-center justify-end gap-[19px]'}>
                  <Text className={'max-w-[220px] !text-start'}>Mon–Sun: 10:00 – 22:00</Text>
                  <Icon id={'time'} width={20} height={20} />
                </div>
              </div>
              <div className={'flex items-center justify-end gap-[19px]'}>
                <Text className={'max-w-[220px] !text-start'}>Phone: +995 555 17 48 48</Text>
                <Icon id={'phone'} width={20} height={20} />
              </div>
            </div>
            <div className={'w-[0.5px] bg-primary-cl h-auto'}></div>
            <div className={'flex flex-col justify-between gap-[30px] py-1'}>
              <div className={'flex items-center gap-[19px]'}>
                <Icon id={'mark'} width={20} height={20} />
                <Text className={'max-w-[220px] !text-start'}>
                  5 Brothers Kakabadze Street, Tbilisi, Georgia
                </Text>
              </div>
              <div className={'flex flex-col gap-2'}>
                <div className={'flex items-center gap-[19px]'}>
                  <Icon id={'time'} width={20} height={20} />
                  <Text className={'max-w-[220px] !text-start'}>Mon–Fri: 10:00 – 19:00</Text>
                </div>
                <div className={'flex items-center gap-[19px]'}>
                  <Icon id={'time'} width={20} height={20} />
                  <Text className={'max-w-[220px] !text-start'}>Sat–Sun: 11:00 – 18:00</Text>
                </div>
              </div>
              <div className={'flex items-center gap-[19px]'}>
                <Icon id={'phone'} width={20} height={20} />
                <Text className={'max-w-[220px] !text-start'}>Phone: +995 522 22 45 50</Text>
              </div>
            </div>
          </div>
          <div className={'flex flex-col items-center gap-1'}>
            <div className={'flex items-center gap-[19px]'}>
              <Icon id={'car-delivery'} width={24} height={24} />
              <Text className={''}>Pickup & Delivery Service available city-wide</Text>
            </div>
            <div className={'flex items-center gap-[19px]'}>
              <Icon id={'delivery'} width={24} height={24} />
              <Text className={''}>Info@hamptons.ge</Text>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default VisitInfo;
