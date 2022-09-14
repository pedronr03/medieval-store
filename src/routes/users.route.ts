import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import authCreateUser from '../middlewares/auth-create-user.middleware';

const usersRoute = Router();

const usersController = new UsersController();

usersRoute.post('/', authCreateUser, usersController.create);

export default usersRoute;
