import Joi from 'joi';

export const userCredentialsSchema = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const userSchema = Joi.object().keys({
  username: Joi.string().min(3).required(),
  password: Joi.string().min(8).required(),
  level: Joi.number().min(1).required(),
  classe: Joi.string().min(3).required(),
});
