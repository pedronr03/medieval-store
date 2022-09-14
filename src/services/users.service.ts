import connection from '../models/connection';
import UsersModel from '../models/users.model';
import { IUser } from '../types/User';
import { sign } from '../helpers/jwt';

class UsersService {
  constructor(private readonly usersModel = new UsersModel(connection)) {}

  async create(userData: IUser) {
    await this.usersModel.create(userData);
    const token = sign(userData);
    return token;
  }
}

export default UsersService;