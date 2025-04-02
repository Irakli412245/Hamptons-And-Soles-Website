import Title from "../UI/Title.tsx";

const ContactSection = () => {
    return (
        <div className={'flex flex-col py-[207px] bg-secondary-bg'}>
            <Title type={'h2'} className={'mb-[70px]'}>
                Get in touch with us:
            </Title>
            <ul className={'flex justify-center gap-[60px] text-[14px] mb-[77px]'}>
                <li className={'flex flex-col items-center gap-10 w-[270px]'}>
                    <p className={'block px-4 uppercase text-center'}>
                        Brothers Kakabadze 5,
                        <br/>
                        Tbilisi 0110, Georgia
                    </p>
                    <span className={'w-full h-[0.5px] bg-primary-cl'}></span>
                    <p className={'block px-4 uppercase text-center'}>
                        Monday - Friday
                        <br/>
                        10:00 - 19:00
                    </p>
                </li>
                <li className={'flex flex-col items-center gap-10 w-[270px]'}>
                    <p className={'uppercase text-center'}>
                        Axis Towers shopping center,
                        <br/>
                        I.Chavchavadze Avenue 37m
                    </p>
                    <span className={'w-full h-[0.5px] bg-primary-cl'}></span>
                    <p className={'uppercase text-center'}>
                        Monday - Sunday
                        <br/>
                        10:00 - 22:00
                    </p>
                </li>
            </ul>
            <div className={'flex flex-col items-center gap-1'}>
                <a href="tel:+995555174848">+995 555 17 48 48</a>
                <a href="mailto:Info@hamptons.ge">Info@hamptons.ge</a>
            </div>
        </div>
    );
};

export default ContactSection;