import heroImage from '../../assets/images/home/heroImage.png'

const HeroImage = () => {
    return (
        <div
            className="w-full h-[315px] table:h-[510px] desktop:h-[810px] bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: `url(${heroImage})`}}
        />
    );
};

export default HeroImage;