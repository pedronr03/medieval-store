import { IProduct } from '../types/Product';
import connection from '../models/connection';
import ProductsModel from '../models/products.model';

class ProductService {
  constructor(private readonly productsModel = new ProductsModel(connection)) {}

  create(productData: IProduct) {
    return this.productsModel.create(productData);
  }
}

export default ProductService;