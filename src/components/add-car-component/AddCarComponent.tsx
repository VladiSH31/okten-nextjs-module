import React from 'react';
import Form from "next/form";
import {saveCar} from "@/actions/server.actions";

const AddCarComponent = () => {
    return (
        <div>
            <Form action={saveCar}>
                <input type="text" name={'brand'} placeholder={'Brand'} className={'border p-0.5 m-2'}/>
                <input type="text" name={'price'}  placeholder={'Price'} className={'border p-0.5 m-2'}/>
                <input type="text" name={'year'} placeholder={'Year'} className={'border p-0.5 m-2'}/>
                <button className={'border p-0.5 m-2'}>Add Car</button>
            </Form>
        </div>
    );
};

export default AddCarComponent;