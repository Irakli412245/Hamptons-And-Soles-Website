import Card from './components/Card.tsx';
import { Image } from './components/Images.tsx';

const images = [
    '/images/home/team/team-1.png',
    '/images/home/team/team-2.png',
    '/images/home/team/team-3.png',
    '/images/home/team/team-5.png',
];

const Team = () => {
    return (
        <Card
            type="images"
            className="bg-[linear-gradient(to_bottom,_#000000_0%,_#000000_50%,_#330000_50%,_#330000_100%)] py-10 overflow-hidden"
        >
            <div className="w-full max-w-7xl mx-auto">
                {/* First row - moving right */}
                <div className="flex mb-5 overflow-hidden">
                    <div className="flex gap-5 animate-infinite-scroll-right">
                        {[...images, ...images].map((src, index) => (
                            <div key={`right-${index}`} className="w-[283px] h-[200px] flex-shrink-0">
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
                    <div className="flex gap-5 animate-infinite-scroll-left">
                        {[...images, ...images].map((src, index) => (
                            <div key={`left-${index}`} className="w-[283px] h-[200px] flex-shrink-0">
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

export default Team;
