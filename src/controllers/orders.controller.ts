import { Request, Response } from 'express';
import httpStatusCode from 'http-status-codes';
import jwt from 'jsonwebtoken';
import OrdersService from '../services/orders.service';
import { UserCredentials } from '../types/User';

class OrdersController {
  constructor(private readonly ordersService = new OrdersService()) {}

  getAll = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.getAll();
    return res.status(httpStatusCode.OK).json(orders);
  };

  create = async (req: Request, res: Response) => {
    const { productsIds } = req.body;
    const { authorization: token } = req.headers;
    const { username } = jwt.decode(token as string) as UserCredentials;
    const newOrder = await this.ordersService.create(username, productsIds);
    return res.status(httpStatusCode.CREATED).json(newOrder);
  };
}

export default OrdersController;
