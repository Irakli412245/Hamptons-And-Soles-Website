import Card from "./components/Card.tsx";
import CardTitle from "./components/CardTitle.tsx";
import CardSubTitle from "./components/CardSubTitle.tsx";
import CardText from "./components/CardText.tsx";
import Icon from "../../UI/Icon.tsx";

const Warranty = () => {
    return (
        <Card className={'pt-[60px] table:pt-[100px]'}>
            <CardTitle className={'mb-10 table:mb-20'}>
                Warranty
            </CardTitle>
            <CardSubTitle className={'max-w-6xl mb-10 table:mb-20'}>
                Thank you for choosing our shoe restoration service! We take pride in our work and want you to be fully
                satisfied with the results.
            </CardSubTitle>
            <ul className={'flex flex-col pb-8'}>
                <li className={'relative pl-6 pb-10'}>
                    <div>
                        <Icon id={'circle'} width={16} height={16} className={'absolute top-[7px] left-[-7.5px] z-10'}/>
                        <div className={'absolute top-[7px] bottom-0 left-0 w-[0.5px] bg-primary-cl'}></div>
                    </div>
                    <p className="font-normal text-[22px] leading-[110%] uppercase mb-5">
                        Warranty Coverage:
                    </p>
                    <CardText className={''}>
                        Warranty covers the restored paint and finishing on your shoes, ensuring that the restored areas
                        remain intact under normal wear conditions, for a period of 30 days from the date of
                        restoration.
                    </CardText>
                </li>
                <li className={'relative pl-6 pb-10'}>
                    <div>
                        <Icon
                            id={'circle'}
                            width={16}
                            height={16}
                            className={'!flex justify-center items-center absolute top-[7px] left-[-6px] z-10'}
                        />
                        <div className={'absolute top-0 bottom-0 left-0 w-[0.5px] bg-primary-cl'}></div>
                    </div>
                    <p className="font-normal text-[22px] leading-[110%] uppercase mb-5">
                        Warranty Coverage:
                    </p>
                    <CardText className={''}>
                        Warranty covers the restored paint and finishing on your shoes, ensuring that the restored areas
                        remain intact under normal wear conditions, for a period of 30 days from the date of
                        restoration.
                    </CardText>
                </li>
                <li className={'relative pl-6 pb-10'}>
                    <div>
                        <Icon id={'circle'} width={16} height={16} className={'absolute top-[7px] left-[-7.5px] z-10'}/>
                        <div className={'absolute top-0 bottom-0 left-0 w-[0.5px] bg-primary-cl'}></div>
                    </div>
                    <p className="font-normal text-[22px] leading-[110%] uppercase mb-5">
                        Warranty Coverage:
                    </p>
                    <CardText className={''}>
                        Warranty covers the restored paint and finishing on your shoes, ensuring that the restored areas
                        remain intact under normal wear conditions, for a period of 30 days from the date of
                        restoration.
                    </CardText>
                </li>
                <li className={'relative pl-6 pb-1'}>
                    <div>
                        <Icon id={'circle'} width={16} height={16} className={'absolute top-[7px] left-[-7px] z-10'}/>
                        <div className={'absolute top-0 bottom-0 left-0 w-[0.5px] bg-primary-cl'}></div>
                    </div>
                    <p className="font-normal text-[22px] leading-[110%] uppercase mb-5">
                        Warranty Coverage:
                    </p>
                    <CardText className={''}>
                        Warranty covers the restored paint and finishing on your shoes, ensuring that the restored areas
                        remain intact under normal wear conditions, for a period of 30 days from the date of
                        restoration.
                    </CardText>
                </li>

            </ul>
        </Card>
    );
};

export default Warranty;