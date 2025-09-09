import React from 'react';
import {saveCar} from "@/actions/server.actions";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carsValidator} from "@/validators/cars.validator";

interface IFormProps {
    brand: string,
    price: number,
    year: number
}

const AddCarComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<IFormProps>({
        mode: 'all',
        resolver: joiResolver(carsValidator)
    });

    const customHandler = async (formDataProps: IFormProps) => {
        await saveCar(formDataProps)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>

                <label>
                    <input type="text" {...register('brand')} placeholder={'Brand'} className={'border p-0.5 m-2'}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </label>
                <label>
                    <input type="number" {...register('price')} placeholder={'Price'} className={'border p-0.5 m-2'}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </label>
                <label>
                    <input type="number" {...register('year')} placeholder={'Year'} className={'border p-0.5 m-2'}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </label>
                <button disabled={!isValid} className={'border p-0.5 m-2'}>Add Car</button>
            </form>
        </div>
    );
};

export default AddCarComponent;