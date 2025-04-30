import Card from "./components/Card.tsx";
import CardTitle from "./components/CardTitle.tsx";
import Icon from "../UI/Icon.tsx";

const Mission = () => {
    return (
        <Card type={'content'} className={'gap-[40px] table:gap-[70px]'}>
            <CardTitle type={'h2'} className={'max-w-[920px]'}>
                Our mission is to provide customers with professional, aesthetically-driven restoration and zero risk hand-cleaning of luxury items, paired with comfortable service
            </CardTitle>
            <CardTitle type={'h2'} className={'max-w-[920px]'}>
                our services:
            </CardTitle>
            <ul className={'flex w-full flex-col gap-[10px]'}>
                <li className={'flex items-center gap-4 border-[0.5px] border-primary-cl h-[50px] px-10'}>
                    <Icon id={'shoes'} width={20} height={20}/>
                    <CardTitle type={'h3'}>shoe restoration</CardTitle>
                </li>
                <li className={'flex items-center gap-4 border-[0.5px] border-primary-cl h-[50px] px-10'}>
                    <Icon id={'bag'} width={20} height={20}/>
                    <CardTitle type={'h3'}>bag restoration</CardTitle>
                </li>
                <li className={'flex items-center gap-4 border-[0.5px] border-primary-cl h-[50px] px-10'}>
                    <Icon id={'cleaning'} width={20} height={20}/>
                    <CardTitle type={'h3'} className={'!text-start'}>delicate hand - cleaning</CardTitle>
                </li>
                <li className={'flex items-center gap-4 border-[0.5px] border-primary-cl h-[50px] px-10'}>
                    <Icon id={'soles'} width={20} height={20}/>
                    <CardTitle type={'h3'} className={'!text-start'}>protective soles</CardTitle>
                </li>
                <li className={'flex items-center gap-4 border-[0.5px] border-primary-cl h-[50px] px-10'}>
                    <Icon id={'repair'} width={20} height={20}/>
                    <CardTitle type={'h3'} className={'!text-start'}>Cobbler Repair</CardTitle>
                </li>
                <li className={'flex items-center gap-4 border-[0.5px] border-primary-cl h-[50px] px-10'}>
                    <Icon id={'star'} width={20} height={20}/>
                    <CardTitle type={'h3'} className={'!text-start'}>Golden Goose Sole Repair Service</CardTitle>
                </li>
            </ul>
        </Card>
    );
};

export default Mission;