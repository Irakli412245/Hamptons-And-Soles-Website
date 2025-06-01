import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

interface IProps {
  sliders: string[];
  direction: 'ltr' | 'rtl';
  imageW: number;
  imageH: number;
}

const EmblaCarousel: React.FC<IProps> = ({ sliders, direction, imageW, imageH }) => {
  const [emblaRef] = useEmblaCarousel(
    {
      align: 'end',
      loop: true,
      duration: 1000,
      direction,
      watchSlides: false,
    },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <section className="embla" dir={direction}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {sliders.map((index) => (
            <div className="embla__slide" key={index}>
              <img alt={'team'} src={index} className={`block w-[${imageW}px] h-[${imageH}px]`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
