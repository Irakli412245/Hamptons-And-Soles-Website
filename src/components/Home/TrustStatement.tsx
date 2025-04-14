import 'aos/dist/aos.css';

import Title from "../UI/Title.tsx";
import InfiniteGallery from "../UI/InfiniteGallery.tsx";
import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";

const brands = [
    'GUCCI', 'BALENCIAGA', 'CHANEL', 'DIOR', 'LOUIS VUITTON', 'FENDI',
    'SAINT LAURENT', 'PRADA', 'HERMÈS'
];

const imagesGallery = [
    "/images/home/gallery/gallery1.png",
    "/images/home/gallery/gallery2.png",
    "/images/home/gallery/gallery3.png",
    "/images/home/gallery/gallery4.png",
    "/images/home/gallery/gallery5.png",
    "/images/home/gallery/gallery6.png",
];

const galleryMobileImages = [
    {
        link: "/images/home/gallery/galleryMobile1.png",
        side: 'fade-left',
    },
    {
        link: "/images/home/gallery/galleryMobile2.png",
        side: 'fade-right',
    },
    {
        link: "/images/home/gallery/galleryMobile3.png",
        side: 'fade-left',
    },
    {
        link: "/images/home/gallery/galleryMobile4.png",
        side: 'fade-right',
    },
]

const TrustStatement = () => {
    const {width} = useWindowDimensions();

    return (
        <section className="w-full bg-secondary-bg py-[80px] table:py-[176px]">
            <div className={'flex flex-col gap-12 items-center mb-[80px] table:mb-[180px] mobile:px-10'}>
                <div data-aos='fade-left'>
                    <Title type={'h2'} className={'max-w-[853px]'}>
                        Since 2017, we've had the honor of restoring and caring for over 7,000 of your beloved items
                        from finest luxury brands. Thank you for your continued trust in our service.
                    </Title>
                </div>
                <span className={'block w-[207px] table:w-[310px] desktop:w-[414px] h-[0.5px] bg-primary-cl'}></span>
                <p data-aos='fade-right' className="text-center text-sm max-w-lg">{brands.join(' | ')} | AND MORE</p>
            </div>
            {
                width > 426 ? (
                    <InfiniteGallery images={imagesGallery} duration={30} className={'h-[294px]'}/>
                ) : (
                    <div className={'grid grid-cols-2 gap-2'}>
                        {galleryMobileImages.map(el => (
                            <div key={el.link}>
                                <img
                                    key={el.link}
                                    src={el.link}
                                    alt={el.link}
                                    className={`object-cover flex-shrink-0`}
                                />
                            </div>
                        ))}
                    </div>
                )
            }
        </section>
    );
};

export default TrustStatement;