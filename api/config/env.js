/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import dotenv from 'dotenv';
dotenv.config();
const env = process.env.NODE_ENV || 'development';
const config = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: process.env.PORT || 5000,
  secrets: {
    jwt: process.env.JWT_SECRET || 'mercaditocr',
    jwtExp: process.env.JWT_EXP || '1d',
  },
  mongodbUrl:
    process.env.MONGODB_URI || `mongodb://localhost:27017/mercaditocr`,
};

export default config;
