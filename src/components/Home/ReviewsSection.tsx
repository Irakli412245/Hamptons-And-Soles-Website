import Title from "../UI/Title.tsx";
import InfiniteGallery from "../UI/InfiniteGallery.tsx";
import { useTranslation } from 'react-i18next';

const imagesReviews = [
    "/images/home/reviews/review1.png",
    "/images/home/reviews/review2.png",
    "/images/home/reviews/review3.png",
    "/images/home/reviews/review4.png",
    "/images/home/reviews/review5.png",
    "/images/home/reviews/review6.png",
    "/images/home/reviews/review7.png",
];

const ReviewsSection = () => {
    const { t } = useTranslation();
    
    return (
        <div className={'flex flex-col items-center py-[65px] table:py-[120px] bg-secondary-bg'}>
            <div className={'flex items-center gap-8 table:gap-20 w-full mb-[50px] table:mb-[88px]'}>
                <span className={'w-full h-[0.5px] bg-primary-cl'}></span>
                <Title type={'h2'} className={''}>{t('home.reviewsSection.title')}</Title>
                <span className={'w-full h-[0.5px] bg-primary-cl'}></span>
            </div>
            <div className={' mb-[50px] table:mb-[77px]'}>
                <InfiniteGallery images={imagesReviews} duration={40} className={'h-[364px]'}/>
            </div>
            <p className={'text-center uppercase max-w-[530px] mobile:px-14'}>
                {t('home.reviewsSection.description')}
            </p>
        </div>
    );
};

export default ReviewsSection;