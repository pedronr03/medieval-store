import httpStatusCode from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/CustomError';
import { userCredentialsSchema } from '../schemas/users.schema';

const authLogin = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = userCredentialsSchema.validate(req.body);
  if (error) {
    throw new CustomError(httpStatusCode.BAD_REQUEST, 'BAD_REQUEST', error.message);
  }
  next();
};

export default authLogin;