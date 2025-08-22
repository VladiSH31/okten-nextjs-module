import React, {FC} from 'react';
import {ICar} from "@/models/ICar";

type PropCar = {
    car: ICar
}

const CarComponent:FC<PropCar> = ({car}) => {
    return (
        <div className={'border p-0.5 m-1'}>
            <div>{car.id}</div>
            <div>{car.brand}</div>
            <div>{car.price}</div>
            <div>{car.year}</div>
        </div>
    );
};

export default CarComponent;