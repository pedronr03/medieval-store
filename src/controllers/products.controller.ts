import { Request, Response } from 'express';
import httpStatusCode from 'http-status-codes';
import ProductService from '../services/products.service';

class ProductsController {
  constructor(private readonly productsService = new ProductService()) {}

  create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const newProduct = await this.productsService.create({ name, amount });
    return res.status(httpStatusCode.CREATED).json(newProduct);
  };
}

export default ProductsController;
