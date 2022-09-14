import 'dotenv/config';
import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../types/User';

const JWT_SECRET = process.env.JWT_SECRET || 'default';

const JWT_CONFIG: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export const sign = (data: IUser) => {
  const token = jwt.sign(data, JWT_SECRET, JWT_CONFIG);
  return token;
};

export const decode = (token: string) => {
  const decodeToken = jwt.verify(
    token, 
    JWT_SECRET,
    (err, result) => (err ? 'Invalid' : result),
  );
  return decodeToken;
};
