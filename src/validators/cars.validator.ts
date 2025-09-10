import Joi from "joi";

const carsValidator = Joi.object({
    brand: Joi.string()
        .pattern(/^[a-zA-Zа]+$/)
        .min(1)
        .max(20)
        .required()
        .messages({
            'string.pattern.base': 'Назва бренду повинна містити лише літери латиниця.',
            'string.empty': 'Поле бренду не може бути порожнім.',
            'string.min': 'Назва бренду повинна містити щонайменше 1 символ.',
            'string.max': 'Назва бренду не повинна перевищувати 20 символів.',
            'any.required': 'Поле бренду є обов’язковим.',
        }),
    price: Joi.number()
        .min(0)
        .max(1000000)
        .required()
        .messages({
            'number.base': 'Ціна повинна бути числом.',
            'number.min': 'Ціна не може бути меншою за 0.',
            'number.max': 'Ціна не може бути більшою за 1000000.',
            'any.required': 'Поле ціни є обов’язковим.',
        }),
    year: Joi.number()
        .min(1990)
        .max(2025)
        .required()
        .messages({
            'number.base': 'Рік повинен бути числом.',
            'number.min': 'Рік не може бути раніше 1990.',
            'number.max': 'Рік не може бути пізніше 2025.',
            'any.required': 'Поле року є обов’язковим.',
        }),
});

export {
    carsValidator
}