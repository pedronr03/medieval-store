import 'express-async-errors';
import express from 'express';
import errorMiddleware from './middlewares/error.middleware';
import productsRoute from './routes/products.route';
import usersRoute from './routes/users.route';
import ordersRoutes from './routes/orders.route';
import loginRoute from './routes/login.route';

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use('/products', productsRoute);

app.use('/orders', ordersRoutes);

app.use('/users', usersRoute);

app.use(errorMiddleware);

export default app;
