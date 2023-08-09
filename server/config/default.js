import dotenv from 'dotenv';
dotenv.config();

export default {
  FEURL: process.env.FE_URL,
  endpoint: process.env.API_URL,
  masterKey: process.env.API_KEY,
  port: process.env.PORT,
  tokenKey: process.env.TOKEN_KEY,
  nodemailer: {
    user: process.env.NODEMAILER_USERNAMER,
    pass: process.env.NODEMAILER_PASSWORD
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
}