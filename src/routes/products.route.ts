import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import authCreateProduct from '../middlewares/auth-create-product.middleware';

const productsRoute = Router();

const productsController = new ProductsController();

productsRoute.post('/', authCreateProduct, productsController.create);

productsRoute.get('/', productsController.getAll);

export default productsRoute;