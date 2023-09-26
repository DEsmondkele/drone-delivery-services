import Joi from 'joi';


const droneSchema = Joi.object({
    serialNumber: Joi.string().max(100).required(),
    model: Joi.string().valid('Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight').required(),
    weightLimit: Joi.number().max(500).required(),
    batteryCapacity: Joi.number().required(),
    state: Joi.string().valid('IDLE', 'LOADING', 'LOADED', 'DELIVERING', 'DELIVERED', 'RETURNING').required(),
});

const medicationSchema = Joi.object({
    name: Joi.string().required(),
    weight: Joi.number().required(),
    code: Joi.string().regex(/^[A-Z0-9_]+$/).required(),
    image: Joi.string().required(),
});

export { droneSchema, medicationSchema };
