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
    return fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            brand: brand,
            price: price,
            year: year
        })
    })
        .then(response => response.json())
}