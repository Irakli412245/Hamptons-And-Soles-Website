import Card from './components/Card.tsx';
import Title from './components/Title.tsx';
import ServiceCard from './components/ServiceCard.tsx';

const MissionStatement = () => {
  return (
    <Card type={'content'} className={'gap-20 table:gap-[70px] '}>
      <Title className={'max-w-[921px]'}>
        Our mission is to provide customers with professional, aesthetically-driven restoration and
        zero risk hand-cleaning of luxury items, paired with comfortable service
      </Title>
      <Title className={''}>our services:</Title>
      <div className={'grid grid-cols-1 table:grid-cols-2 gap-2.5 table:gap-x-[70px]'}>
        <ServiceCard text={'shoe restoration'} iconId={'shoes'} />
        <ServiceCard text={'bag restoration'} iconId={'shopping-cart'} />
        <ServiceCard text={'delicate hand-cleaning'} iconId={'cleaning'} />
        <ServiceCard text={'protective soles'} iconId={'soles'} />
        <ServiceCard text={'Cobbler Repair'} iconId={'repair'} />
        <ServiceCard text={'Golden Goose Sole Repair Service'} iconId={'star'} />
      </div>
    </Card>
  );
};

export default MissionStatement;
