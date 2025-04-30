import Card from "./components/Card.tsx";
import CardTitle from "./components/CardTitle.tsx";
import Icon from "../UI/Icon.tsx";

const Contacts = () => {
    return (
        <Card type={'content'} className={'bg-secondary-bg'}>
            <CardTitle type={'h2'} className={'mb-[70px]'}>
                Visit us
            </CardTitle>
            <ul className={'flex flex-col gap-[60px]'}>
                <li className={'flex flex-col gap-[30px] border-l-[0.5px] border-primary-cl px-3'}>
                    <div className={'flex items-center gap-3.5'}>
                        <Icon id={'mark'} width={14} height={14}/>
                        <CardTitle type={'h3'}>
                            5 Brothers Kakabadze <br/> Street, Tbilisi, Georgia
                        </CardTitle>
                    </div>
                    <div className={'flex flex-col'}>
                        <div className={'flex items-center gap-3.5'}>
                            <Icon id={'clock'} width={14} height={14}/>
                            <CardTitle type={'h3'}>
                                Mon–Fri: 10:00 – 19:00
                            </CardTitle>
                        </div>
                        <div className={'flex items-center gap-3.5'}>
                            <Icon id={'clock'} width={14} height={14}/>
                            <CardTitle type={'h3'}>
                                Sat–Sun: 11:00 – 18:00
                            </CardTitle>
                        </div>
                    </div>
                    <div className={'flex items-center gap-3.5'}>
                        <Icon id={'phone'} width={14} height={14}/>
                        <CardTitle type={'h3'}>
                            Phone: +995 522 22 45 50
                        </CardTitle>
                    </div>
                </li>
                <li className={'flex flex-col gap-[30px] border-l-[0.5px] border-primary-cl px-3'}>
                    <div className={'flex items-center gap-3.5'}>
                        <div className={'w-[14px]'}>
                        <Icon id={'mark'} width={14} height={14}/>
                        </div>
                        <CardTitle type={'h3'} className={'!text-start'}>
                            Axis Towers Shopping Ctr., <br/> 37M Ilia Chavchavadze <br/> Avenue, Tbilisi, Georgia
                        </CardTitle>
                    </div>
                    <div className={'flex flex-col'}>
                        <div className={'flex items-center gap-3.5'}>
                            <Icon id={'clock'} width={14} height={14}/>
                            <CardTitle type={'h3'}>
                                Mon–Sun: 10:00 – 22:00
                            </CardTitle>
                        </div>
                    </div>
                    <div className={'flex items-center gap-3.5'}>
                        <Icon id={'phone'} width={14} height={14}/>
                        <CardTitle type={'h3'}>
                            Phone: +995 555 17 48 48
                        </CardTitle>
                    </div>
                </li>
            </ul>

        </Card>
    );
};

export default Contacts;