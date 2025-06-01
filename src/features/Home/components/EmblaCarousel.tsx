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
      align: 'start',
      loop: true,
      dragFree: true,
      direction,
      duration: 20000,
    },
    [
      Autoplay({
        delay: 10, 
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <section className="embla" dir={direction}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {sliders.map((src, idx) => (
            <div className="embla__slide" key={idx}>
              <img
                alt={'team'}
                src={src}
                className="block"
                style={{ width: imageW, height: imageH }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
