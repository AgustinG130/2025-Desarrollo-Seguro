import jwt, { SignOptions, JwtPayload, Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET: Secret = process.env.JWT_SECRET!;

const JWT_EXPIRES_IN: string | number = process.env.JWT_EXPIRES_IN!;

const signOptions: SignOptions = { expiresIn: JWT_EXPIRES_IN as any };

export const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, JWT_SECRET, signOptions);
};

export const verifyToken = (token: string): JwtPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch {
    return null;
  }
};

