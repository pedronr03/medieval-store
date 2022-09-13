import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productsRoute = Router();

const productsController = new ProductsController();

productsRoute.post('/', productsController.create);

export default productsRoute;