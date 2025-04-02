import Icon from "../UI/Icon.tsx";

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
        <section className="w-full flex flex-col items-center gap-[66px] py-[184px]">
            <h2 data-aos='fade-right'
                className={'max-w-3xl font-seasons font-normal text-[28px] text-center uppercase'}>
                Our mission is to provide customers with professional, aesthetically-driven restoration and delicate
                cleaning of luxury shoes and handbags, paired with high-quality, comfortable service
            </h2>
            <div data-aos='fade-left'>
                <p className={'font-seasons font-normal text-[28px] text-center uppercase'}>Our services:</p>
                <ul className={'grid grid-cols-2 gap-x-[100px]'}>
                    {
                        links.map(el => (
                            <li key={el.title}
                                className={'flex gap-2 min-w-[270px] px-6 pt-6 pb-1.5 border-b-[0.5px] border-primary-cl'}>
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