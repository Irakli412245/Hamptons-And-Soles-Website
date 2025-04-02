import Icon from "../UI/Icon.tsx";

import mainBg from '../../assets/images/home/main-bg.png'

const CompanyLogo = () => {
    return (
        <div>
            <div className="relative w-full h-screen">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{backgroundImage: `url(${mainBg})`}}
                />
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <Icon id={'LogoHero'} width={650} height={292}/>
                </div>
            </div>
        </div>
    );
};

export default CompanyLogo;