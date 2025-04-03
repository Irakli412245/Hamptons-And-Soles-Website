import Icon from "../UI/Icon.tsx";
import Title from "../UI/Title.tsx";

const links = [
    {
        title: 'delicate cleaning',
        link: '/',
        iconId: 'cleaning'
    },
    {
        title: 'shoe restoration',
        link: '/',
        iconId: 'shoe'
    },
    {
        title: 'bag restoration',
        link: '/',
        iconId: 'bag'
    },
    {
        title: 'coat restoration',
        link: '/',
        iconId: 'coat'
    },
    {
        title: 'protective soles',
        link: '/',
        iconId: 'soles'
    },
    {
        title: 'Cobbler Repair',
        link: '/',
        iconId: 'Repair'
    },
]

const MissionStatement = () => {
    return (
        <section className="w-full flex flex-col items-center gap-[62px] py-[77px] table:py-[184px] mobile:px-10">
            <Title type={'h2'} className={'max-w-[930px]'}>
                Our mission is to provide customers with professional, aesthetically-driven restoration and delicate
                cleaning of luxury shoes and handbags, paired with high-quality, comfortable service
            </Title>
            <div data-aos='fade-left' className={'flex flex-col gap-[58px]'}>
                <p className={'font-seasons font-normal text-[28px] text-center uppercase'}>Our services:</p>
                <ul className={'grid grid-cols-1 table:grid-cols-2 gap-x-[100px]'}>
                    {
                        links.map(el => (
                            <li key={el.title}
                                className={'flex gap-4 min-w-[300px] px-6 pt-6 pb-1.5 border-b-[0.5px] border-primary-cl'}>
                                <Icon id={el.iconId} width={20} height={20}/>
                                <p className={'uppercase'}>{el.title}</p>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </section>
    );
};

export default MissionStatement;