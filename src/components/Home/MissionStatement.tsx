import Icon from "../UI/Icon.tsx";
import Title from "../UI/Title.tsx";
import { useTranslation } from 'react-i18next';

const MissionStatement = () => {
    const { t } = useTranslation();
    
    const links = [
        {
            title: t('home.missionStatement.delicateCleaning'),
            link: '/',
            iconId: 'cleaning'
        },
        {
            title: t('home.missionStatement.shoeRestoration'),
            link: '/',
            iconId: 'shoe'
        },
        {
            title: t('home.missionStatement.bagRestoration'),
            link: '/',
            iconId: 'bag'
        },
        {
            title: t('home.missionStatement.coatRestoration'),
            link: '/',
            iconId: 'coat'
        },
        {
            title: t('home.missionStatement.protectiveSoles'),
            link: '/',
            iconId: 'soles'
        },
        {
            title: t('home.missionStatement.cobblerRepair'),
            link: '/',
            iconId: 'Repair'
        },
    ];

    return (
        <div data-aos='fade-up'>
            <section className="w-full flex flex-col items-center gap-[62px] py-[77px] table:py-[184px] mobile:px-10">
                <Title type={'h2'} className={'max-w-[930px]'}>
                    {t('home.missionStatement.title')}
                </Title>
                <div className={'flex flex-col gap-[58px]'}>
                    <p className={'font-seasons font-normal text-[28px] text-center uppercase'}>
                        {t('home.missionStatement.services')}
                    </p>
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
        </div>
    );
};

export default MissionStatement;