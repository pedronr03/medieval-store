import 'express-async-errors';
import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import productsRoute from './routes/products.route';

const app = express();

app.use(express.json());

app.use('/products', productsRoute);

app.use(errorMiddleware);

export default app;
