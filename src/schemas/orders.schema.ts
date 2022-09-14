import Joi from 'joi';

const orderSchema = Joi.object().keys({
  productsIds: Joi.array().min(1).items(Joi.number()).messages({
    'array.base': '"productsIds" must be an array',
    'array.min': '"productsIds" must include only numbers',
  })
    .required(),
});

export default orderSchema;
