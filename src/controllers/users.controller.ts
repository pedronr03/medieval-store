import { Request, Response } from 'express';
import httpStatusCode from 'http-status-codes';
import UsersService from '../services/users.service';

class UsersController {
  constructor(private readonly usersService = new UsersService()) {}

  create = async (req: Request, res: Response) => {
    const { classe, level, password, username } = req.body;
    const token = await this.usersService.create({ classe, level, password, username });
    return res.status(httpStatusCode.CREATED).json({ token });
  };
}

export default UsersController;