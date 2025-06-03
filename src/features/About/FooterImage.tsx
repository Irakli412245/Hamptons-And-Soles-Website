import Card from './components/Card.tsx';

const FooterImage = () => {
  return (
    <Card type={'image'} className={'pb-0 table:pb-[100px]'}>
      <img
        src="/images/about/footer/about_footer_mob.png"
        alt="shoes photo"
        className={'block w-full h-auto'}
      />
    </Card>
  );
};

export default FooterImage;
