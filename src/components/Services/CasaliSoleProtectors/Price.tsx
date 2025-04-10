import Card from "./components/Card.tsx";
import React from "react";

interface IMobileCardProps {
    title: string;
    price: string;
    imageUrl: string;
    children: React.ReactNode;
}

const MobileCard: React.FC<IMobileCardProps> = ({title, pricw, children}) => {
    return (
        <div className={'border-[0.5px] border-primary-cl'}>
            <div>
                
            </div>
            <div className={'p-7'}>

            </div>
        </div>
    )
}

const Price = () => {
    return (
        <Card>
            <MobileCard/>
        </Card>
    );
};

export default Price;