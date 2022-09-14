import httpStatusCode from 'http-status-codes';
import { Request, Response } from 'express';
import LoginService from '../services/login.service';

class LoginController {
  constructor(private readonly loginService = new LoginService()) {}

  login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const token = await this.loginService.login({ username, password });
    return res.status(httpStatusCode.OK).json({ token });
  };
}

export default LoginController;
