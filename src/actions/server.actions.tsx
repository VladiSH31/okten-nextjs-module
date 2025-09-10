'use server';
import {createCar} from "@/services/api.service";
import {IFormProps} from "@/components/add-car-component/AddCarComponent";

export const saveCar = async (formData: IFormProps) => {

    const car = {
        brand: formData.brand?.toString() || '',
        price: Number(formData.price) || 0,
        year: Number(formData.year) || 0,
    }
    console.log('Saving car:', car);

    return await createCar(car)

}