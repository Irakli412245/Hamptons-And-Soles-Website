import {motion} from "framer-motion";
import React from "react";

interface IProps {
    images: string[];
    duration?: number;
    className?: string;
}

const InfiniteGallery: React.FC<IProps> = ({
                                               images,
                                               duration = 20,
                                               className = "h-[294px]"
                                           }) => {
    return (
        <div className="overflow-hidden w-full relative">
            <motion.div
                className="flex gap-7"
                animate={{x: ["0%", "-100%"]}}
                transition={{
                    repeat: Infinity,
                    duration: duration,
                    ease: "linear",
                }}
            >
                {/* Перший набір картинок */}
                {images.map((src, index) => (
                    <img
                        key={`first-${index}`}
                        src={src}
                        alt={`Gallery ${index}`}
                        className={`${className} object-cover flex-shrink-0`}
                    />
                ))}

                {/* Дубльований набір для безшовності */}
                {images.map((src, index) => (
                    <img
                        key={`second-${index}`}
                        src={src}
                        alt={`Gallery ${index}`}
                        className={`${className} object-cover flex-shrink-0`}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default InfiniteGallery;