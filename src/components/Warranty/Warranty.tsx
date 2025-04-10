import Card from "../Services/Shoes/components/Card";
import CardTitle from "../Services/Shoes/components/CardTitle";
import CardSubTitle from "../Services/Shoes/components/CardSubTitle";
import CardText from "../Services/Shoes/components/CardText";

const Warranty = () => {
    return (
        <Card className={'pt-[60px] table:pt-[100px] bg-primary-bg text-primary-cl'}>
            <CardTitle className={'mb-10 table:mb-20'}>
                Warranty
            </CardTitle>
            
            {/* Warranty Coverage */}
            <div className="mb-12">
                <CardSubTitle className={'mb-6'}>
                    WARRANTY COVERAGE:
                </CardSubTitle>
                <CardText className={'pl-6'}>
                    Warranty covers the restored parts and areas of your shoes. The restored areas remain intact under
                    normal wear conditions for a period of 30 days from the date of restoration.
                </CardText>
            </div>

            {/* Conditions */}
            <div className="mb-12">
                <CardSubTitle className={'mb-6'}>
                    CONDITIONS FOR PROPER MAINTENANCE:
                </CardSubTitle>
                <CardText className={'pl-6'}>
                    The warranty is valid only if the shoes have been maintained as per our care instructions at the time of delivery.
                    Failure to follow these guidelines may void the warranty.
                </CardText>
            </div>

            {/* Exclusions */}
            <div className="mb-12">
                <CardSubTitle className={'mb-6'}>
                    EXCLUSIONS: THE WARRANTY DOES NOT COVER:
                </CardSubTitle>
                <ul className="pl-6 space-y-2">
                    <li>
                        <CardText className={'text-primary-cl'}>
                            1. Normal wear and tear (e.g., scuffs, abrasions, etc.)
                        </CardText>
                    </li>
                    <li>
                        <CardText className={'text-primary-cl'}>
                            2. Damage from improper use of chemicals or misuse
                        </CardText>
                    </li>
                    <li>
                        <CardText className={'text-primary-cl'}>
                            3. Restoration of areas other than the specified restored areas
                        </CardText>
                    </li>
                    <li>
                        <CardText className={'text-primary-cl'}>
                            4. Shoes exposed to extreme conditions beyond normal use
                        </CardText>
                    </li>
                </ul>
            </div>

            {/* Warranty Claims */}
            <div>
                <CardSubTitle className={'mb-6'}>
                    WARRANTY CLAIMS:
                </CardSubTitle>
                <ul className="pl-6 space-y-2">
                    <li>
                        <CardText className={'text-primary-cl'}>
                            1. If any issue arises with the restored area within the warranty period, please contact us to schedule an inspection of your shoes.
                        </CardText>
                    </li>
                    <li>
                        <CardText className={'text-primary-cl'}>
                            2. Upon inspection of the shoes and if the issue falls under warranty, we will re-restore the affected area at no additional cost.
                        </CardText>
                    </li>
                </ul>
            </div>
        </Card>
    );
};

export default Warranty; 