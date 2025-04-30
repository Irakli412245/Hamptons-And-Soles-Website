import Card from './components/Card.tsx';
import { Image } from './components/Images.tsx';
import {useWindowDimensions} from "../../hooks/useWindowDimensions.tsx";

const images = [
    '/images/home/team/team-1.png',
    '/images/home/team/team-2.png',
    '/images/home/team/team-3.png',
    '/images/home/team/team-4.png',
    '/images/home/team/team-5.png',
    '/images/home/team/team-6.png',
    '/images/home/team/team-7.png',
    '/images/home/team/team-8.png',
];

const imagesTop = [
    '/images/home/team/team-1.png',
    '/images/home/team/team-2.png',
    '/images/home/team/team-3.png',
    '/images/home/team/team-4.png',
]

const imagesBottom = [
    '/images/home/team/team-5.png',
    '/images/home/team/team-6.png',
    '/images/home/team/team-7.png',
    '/images/home/team/team-8.png',
]

const Team = () => {
    const {width} =  useWindowDimensions();
    const isMobile = width <= 768
    console.log(isMobile)

    return (
        <Card
            type="images"
            className="bg-[linear-gradient(to_bottom,_#000000_0%,_#000000_50%,_#330000_50%,_#330000_100%)] overflow-hidden table:bg-[linear-gradient(to_bottom,_#000000_0%,_#000000_0%,_#000000_0%,_#000000_0%)] "
        >
            {isMobile ? (
                <div className="w-full max-w-7xl mx-auto">
                {/* First row - moving right */}
                <div className="flex mb-5 overflow-hidden">
                    <div className="flex gap-2 animate-infinite-scroll-right">
                        {[...imagesTop, ...imagesTop].map((src, index) => (
                            <div key={`right-${index}`} className="w-[290px] h-[200px] flex-shrink-0">
                                <Image
                                    src={src}
                                    alt={`Team member ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second row - moving left */}
                <div className="flex overflow-hidden">
                    <div className="flex gap-2 animate-infinite-scroll-left">
                        {[...imagesBottom, ...imagesBottom].map((src, index) => (
                            <div key={`left-${index}`} className="w-[290px] h-[200px] flex-shrink-0">
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
            ) : (
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex mb-5 overflow-hidden">
                        <div className="flex gap-2 animate-infinite-scroll-right">
                            {[...images, ...images].map((src, index) => (
                                <div key={`right-${index}`} className="w-[510px] h-[340px] flex-shrink-0">
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
            )}
        </Card>
    );
};

export default Team;
