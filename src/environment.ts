import dotenv from 'dotenv';
dotenv.config();

// APP
export const HTTP_PORT = Number(process.env.HTTP_PORT ?? '8080');

// DB
export const DB_LOCAL = process.env.DB_LOCAL ?? '';
