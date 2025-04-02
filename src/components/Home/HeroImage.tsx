import heroImage from '../../assets/images/home/heroImage.png'

const HeroImage = () => {
    return (
        <div
            className="w-full h-[810px] bg-cover  bg-no-repeat"
            style={{backgroundImage: `url(${heroImage})`}}
        />
    );
};

export default HeroImage;