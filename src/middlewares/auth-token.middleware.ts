import httpStatusCode from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import CustomError from '../errors/CustomError';
import { verify } from '../helpers/jwt';

const authToken = (req: Request, _res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  if (!token) {
    throw new CustomError(httpStatusCode.UNAUTHORIZED, 'UNAUTHORIZED', 'Token not found');
  }
  verify(token);
  next();
};

export default authToken;