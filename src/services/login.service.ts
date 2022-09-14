import httpStatusCode from 'http-status-codes';
import CustomError from '../errors/CustomError';
import connection from '../models/connection';
import LoginModel from '../models/login.model';
import { sign } from '../helpers/jwt';
import { UserCredentials } from '../types/User';

class LoginService {
  constructor(private readonly loginModel = new LoginModel(connection)) {}

  async login(userCredentials: UserCredentials) {
    const user = await this.loginModel.getUserByCredentials(userCredentials);
    if (!user) {
      throw new CustomError(
        httpStatusCode.UNAUTHORIZED,
        'UNAUTHORIZED',
        'Username or password invalid',
      );
    }
    const token = sign({ password: user.password, username: user.username });
    return token;
  }
}

export default LoginService;