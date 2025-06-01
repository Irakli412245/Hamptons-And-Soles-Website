const Hero = () => {
  return (
    <div
      className={
        'bg-[url(/images/about/hero/about_hero_mob.png)] ' +
        'table:bg-[url(public/images/about/hero/about_hero.png)] ' +
        'w-full h-[700px] table:h-[810px] bg-cover bg-center bg-no-repeat ' +
        'flex flex-col justify-center items-center'
      }
    ></div>
  );
};

export default Hero;
