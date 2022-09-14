import Joi from 'joi';

export const userCredentialsSchema = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const userSchema = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
  level: Joi.number().required(),
  classe: Joi.string().required(),
});
