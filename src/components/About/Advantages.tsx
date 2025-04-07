import Card from "./components/Card.tsx";
import CardTitle from "./components/CardTitle.tsx";
import CardText from "./components/CardText.tsx";

import imageAdvantages from '../../../public/images/about/advantages/advantages.png'

const Advantages = () => {
    return (
        <Card className={'pb-[60px] table:pb-[140px]'}>
            <CardTitle className={'!text-left px-6 mb-[60px]'}>
                Our advantages
            </CardTitle>
            <ul className={'flex flex-col gap-6 px-[50px] mb-[60px]'}>
                <li>
                    <CardText className={''}>
                        At Hamptons & Soles, we guarantee that there is no risk of damage during the cleaning and
                        restoration of your items. We take pride in ensuring that suede maintains its softness, color,
                        and integrity throughout the process.
                    </CardText>
                </li>
                <li>
                    <CardText className={''}>
                        Our meticulous approach involves cleaning each item delicately by hand, tailored to the specific
                        material. We never use machines, which is crucial for preserving the quality of delicate items.
                    </CardText>
                </li>
                <li>
                    <CardText className={''}>
                        If for any reason you are not satisfied with our work, we will make the necessary adjustments
                        without damaging your item, and we won’t stop until you are completely happy with the result.
                        Fortunately, such cases are rare.
                    </CardText>
                </li>
            </ul>
            <div className={'w-full min-h-[130px] mb-[60px]'}>
                <img src={imageAdvantages} className={'w-full h-full '}/>
            </div>
            <ul className={'flex flex-col gap-6 px-[50px]'}>
                <li>
                    <CardText className={''}>
                        Please note that our restoration process requires time—typically 10-14 days—because it is both
                        delicate and detailed.
                    </CardText>
                </li>
                <li>
                    <CardText className={''}>
                        We carefully mix colors, select the right techniques, and address each scratch. If something
                        doesn’t meet our standards, we’ll redo it until we achieve perfection. Quality takes time, and
                        we are committed to delivering exceptional results.
                    </CardText>
                </li>
            </ul>
        </Card>
    );
};

export default Advantages;