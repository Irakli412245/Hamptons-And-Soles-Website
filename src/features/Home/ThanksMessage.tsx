import Card from './components/Card.tsx';
import Text from './components/Text.tsx';

const ThanksMessage = () => {
  return (
    <Card type={'image'} className={'gap-20 table:gap-[70px] bg-secondary-bg table:!pt-0'}>
      <Text className={'max-w-[233px] table:max-w-[314px]'}>
        Seeing your tags inspires us! Thank you for your trust!
      </Text>
      <div
        className={
          'bg-[url(/images/home/thanks/thanks-message-mobile.png)] ' +
          'table:bg-[url(/images/home/thanks/thanks-message.png)] ' +
          'w-full h-[240px] table:h-[810px] bg-cover bg-center bg-no-repeat ' +
          'flex justify-center items-center'
        }
      />
    </Card>
  );
};

export default ThanksMessage;
