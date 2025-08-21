'use server';

import sql from 'better-sqlite3';
import {revalidatePath} from "next/cache";

const db = sql('meals.db')

export const saveMeal = async (formData: FormData) => {
    console.log(formData);
    console.log('Save Action');


    const titleValue = formData.get('title');

    db.prepare(`insert into meals(title)
                values (?)`)
        .run(titleValue)
    revalidatePath('/');
}

type MealsProps = {
    id: number,
    title: string
}

export const getMeals = async (): Promise<MealsProps[]> => {
    return db.prepare<MealsProps[]>('select * from meals').all() as MealsProps[];
}
