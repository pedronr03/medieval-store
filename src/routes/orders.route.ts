import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import authCreateOrder from '../middlewares/auth-create-order.middleware';
import authToken from '../middlewares/auth-token.middleware';

const ordersRoutes = Router();

const ordersController = new OrdersController();

ordersRoutes.get('/', ordersController.getAll);

ordersRoutes.post('/', authToken, authCreateOrder, ordersController.create);

export default ordersRoutes;
