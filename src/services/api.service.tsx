import {ICar} from "@/models/ICar";

export const getAllCars = async ():Promise<ICar[]> => {
    return fetch('http://owu.linkpc.net/carsAPI/v1/cars')
        .then(response => response.json())
}

type ICreatCar = {
    brand: string,
    price: number,
    year: number
}

export const createCar = async ({brand, price, year}:ICreatCar) => {
    const response = await fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ brand, price, year }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to create car: ${response.status} - ${errorText}`);
    }

    return response.json();
}