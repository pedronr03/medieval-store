import 'dotenv/config';
import jwt, { SignOptions } from 'jsonwebtoken';
import { UserCredentials } from '../types/User';

const JWT_SECRET = process.env.JWT_SECRET || 'default';

const JWT_CONFIG: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export const sign = (data: UserCredentials) => {
  const token = jwt.sign(data, JWT_SECRET, JWT_CONFIG);
  return token;
};

export const verify = (token: string) => {
  jwt.verify(token, JWT_SECRET);
  const decodedPayload = jwt.decode(token);
  return decodedPayload || null;
};
