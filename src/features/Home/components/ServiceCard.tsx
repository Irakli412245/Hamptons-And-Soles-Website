import React from 'react';
import Icon from '../../../components/common/Icon.tsx';
import Text from './Text.tsx';

interface IProps {
  text: string;
  iconId: string;
}

const ServiceCard: React.FC<IProps> = ({ text, iconId }) => {
  return (
    <div
      className={
        'flex gap-[19px] items-center border-[0.5px] border-primary-cl px-10 w-[300px] h-[50px]'
      }
    >
      <Icon id={iconId} width={19} height={19} />
      <Text className={'text-start'}>{text}</Text>
    </div>
  );
};

export default ServiceCard;
