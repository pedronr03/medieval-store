import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct, Product } from '../types/Product';

class ProductsModel {
  constructor(private readonly connection: Pool) {}

  async create(productData: IProduct): Promise<Product> {
    const { amount, name } = productData;
    const query = `INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?);`;
    const params = [name, amount];
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(query, params);
    const newProduct = { id, amount, name };
    return newProduct;
  }
}

export default ProductsModel;
