import { Pool, RowDataPacket } from 'mysql2/promise';
import { Order } from '../types/Order';

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
}

export default OrdersModel;
