import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import { IOrder, Order } from '../types/Order';

class OrdersModel {
  constructor(private readonly connection: Pool) {}

  async getAll(): Promise<Order[]> {
    const query = `
    SELECT O.userId, O.id, JSON_ARRAYAGG(P.id) productsIds FROM Trybesmith.Orders O
    JOIN Trybesmith.Products P on O.id = P.orderId
    GROUP BY O.userId, O.id;`;
    const [orders] = await this.connection.execute<RowDataPacket[]>(query);
    return orders as Order[];
  }

  async create(username: string, productsIds: number[]): Promise<IOrder> {
    const userId = await this.getUserIdByUsername(username);
    const query = `INSERT INTO Trybesmith.Orders (userId)
    VALUES (?);`;
    const params = [userId];
    const [{ insertId: orderId }] = await this.connection.execute<ResultSetHeader>(query, params);
    await this.changeProductsOrderId(orderId, productsIds);
    const newOrder = {
      userId,
      productsIds,
    };
    return newOrder;
  }

  private async getUserIdByUsername(username: string): Promise<number> {
    const query = `SELECT * FROM Trybesmith.Users
    WHERE username = ?;`;
    const params = [username];
    const [[{ id }]] = await this.connection.execute<RowDataPacket[]>(query, params);
    return id as number;
  }

  private async changeProductsOrderId(orderId: number, productsIds: number[]) {
    const query = `UPDATE Trybesmith.Products
    SET orderId = ?
    WHERE id = ?;`;
    const promises = productsIds.map((productId) => {
      const params = [orderId, productId];
      return this.connection.execute<ResultSetHeader>(query, params);
    });
    await Promise.all(promises);
  }
}

export default OrdersModel;
