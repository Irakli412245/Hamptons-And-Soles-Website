import Card from "./components/Card.tsx";
import {Image} from "./components/Images.tsx";
import CardTitle from "./components/CardTitle.tsx";

const reviewsImages = [
    '../../../public/images/home/reviews/review-1.png',
    '../../../public/images/home/reviews/review-2.png',
    '../../../public/images/home/reviews/review-3.png',
    '../../../public/images/home/reviews/review-4.png',
    '../../../public/images/home/reviews/review-5.png',
    '../../../public/images/home/reviews/review-6.png',
    '../../../public/images/home/reviews/review-7.png',
    '../../../public/images/home/reviews/review-8.png',
    '../../../public/images/home/reviews/review-9.png',
    '../../../public/images/home/reviews/review-10.png',
    '../../../public/images/home/reviews/review-11.png',
]

const Reviews = () => {
    return (
        <Card type={'images'} className={'bg-[linear-gradient(to_bottom,_#330000_0%,_#330000_60%,_#000000_60%,_#000000_100%)]'}>
            <div className={'flex justify-center items-center gap-6 mb-20'}>
                <div className={'flex min-w-[114px] h-[0.5px] bg-primary-cl'}></div>
                <CardTitle type={'h2'}>
                    Reviews
                </CardTitle>
                <div className={'flex min-w-[114px] h-[0.5px] bg-primary-cl'}></div>
            </div>
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex mb-5 overflow-hidden">
                    <div className="flex gap-4 animate-infinite-scroll-right">
                        {[...reviewsImages, ...reviewsImages].map((src, index) => (
                            <div key={`right-${index}`} className="w-[206px] h-[364px] flex-shrink-0">
                                <Image
                                    src={src}
                                    alt={`Team member ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Reviews;