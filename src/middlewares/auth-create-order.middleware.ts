import httpStatusCode from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import CustomError from '../errors/CustomError';
import orderSchema from '../schemas/orders.schema';

const authCreateOrder = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = orderSchema.validate(req.body);
  if (error) {
    if (error.message.includes('required')) {
      throw new CustomError(httpStatusCode.BAD_REQUEST, 'BAD_REQUEST', error.message);
    }
    throw new CustomError(
      httpStatusCode.UNPROCESSABLE_ENTITY,
      'UNPROCESSABLE_ENTITY',
      error.message,
    );
  }
  next();
};

export default authCreateOrder;