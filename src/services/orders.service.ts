import connection from '../models/connection';
import OrdersModel from '../models/orders.model';

class OrdersService {
  constructor(private readonly ordersModel = new OrdersModel(connection)) {}
  
  getAll() {
    return this.ordersModel.getAll();
  }
}

export default OrdersService;
