import Joi from "joi";

const carsValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа]+$/).min(1).max(20).required(),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1950).max(2025).required()
})

export {
    carsValidator
}