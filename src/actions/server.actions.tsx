'use server';
import {createCar} from "@/services/api.service";

export const saveCar = async (formData: IFormProps) => {

    const car = {
        brand: formData.get('brand')?.toString() || '',
        price: Number(formData.get('price')) || 0,
        year: Number(formData.get('year')) || 0,
    }


    return await createCar(car)

}