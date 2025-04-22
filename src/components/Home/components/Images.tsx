import React from 'react';

type ImageProps = {
    src: string;
    alt?: string;
    title?: string;
    width?: string;
    height?: string;
    className?: string;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none';
};

export const Image: React.FC<ImageProps> = ({
                                                src,
                                                alt = '',
                                                title,
                                                width = 'w-full',
                                                height = 'h-auto',
                                                className = '',
                                                objectFit = 'cover',
                                            }) => {
    return (
        <div className={`${width} ${height} relative ${className}`}>
            <img
                src={src}
                alt={alt}
                title={title}
                className={`w-full h-full object-${objectFit}`}
            />
        </div>
    );
};
