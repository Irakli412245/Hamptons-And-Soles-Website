import 'aos/dist/aos.css';

import Title from "../UI/Title.tsx";
import InfiniteGallery from "../UI/InfiniteGallery.tsx";

const brands = [
    'GUCCI', 'BALENCIAGA', 'CHANEL', 'DIOR', 'LOUIS VUITTON', 'FENDI',
    'SAINT LAURENT', 'PRADA', 'HERMÈS'
];

const imagesGallery = [
    "src/assets/images/home/gallery/gallery1.png",
    "src/assets/images/home/gallery/gallery2.png",
    "src/assets/images/home/gallery/gallery3.png",
    "src/assets/images/home/gallery/gallery4.png",
    "src/assets/images/home/gallery/gallery5.png",
    "src/assets/images/home/gallery/gallery6.png",
];

const TrustStatement = () => {
    return (
        <section className="w-full bg-secondary-bg pt-[176px] pb-[181px]">
            <div className={'flex flex-col gap-12 items-center mb-[181px]'}>
                <div data-aos='fade-left'>
                    <Title type={'h2'} className={'max-w-[853px]'}>
                        Since 2017, we've had the honor of restoring and caring for over 7,000 of your beloved items
                        from
                        finest luxury brands. Thank you for your continued trust in our service.
                    </Title>
                </div>
                <span className={'block w-[414px] h-[0.5px] bg-primary-cl'}></span>
                <p data-aos='fade-right' className="text-center text-sm max-w-lg">{brands.join(' | ')} | AND MORE</p>
            </div>
            <InfiniteGallery images={imagesGallery} duration={30} className={'h-[294px]'}/>
        </section>
    );
};

export default TrustStatement;