import connection from '../models/connection';
import OrdersModel from '../models/orders.model';

class OrdersService {
  constructor(private readonly ordersModel = new OrdersModel(connection)) {}
  
  getAll() {
    return this.ordersModel.getAll();
  }

  create(username: string, productsIds: number[]) {
    return this.ordersModel.create(username, productsIds);
  }
}

export default OrdersService;
