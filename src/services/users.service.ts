import connection from '../models/connection';
import UsersModel from '../models/users.model';
import { IUser } from '../types/User';
import { sign } from '../helpers/jwt';

class UsersService {
  constructor(private readonly usersModel = new UsersModel(connection)) {}

  async create(userData: IUser) {
    const user = await this.usersModel.create(userData);
    const token = sign({ password: user.password, username: user.username });
    return token;
  }
}

export default UsersService;