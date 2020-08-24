/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import dotenv from 'dotenv'
import findConfig from 'find-config'

dotenv.config({ path: findConfig('.env') })
const env = process.env.NODE_ENV || 'development'
const auth = `${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}`
const host = `${process.env.MONGO_CONTAINER}:${process.env.MONGO_PORT}`
const database = `${process.env.DATABASE}`

const config = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: process.env.API_PORT || 5000,
  secrets: {
    jwt: process.env.JWT_SECRET || 'mercaditocr',
    jwtExp: process.env.JWT_EXP || '365d',
  },
  mongodbUrl:
    `mongodb://${auth}@${host}/${database}?authSource=admin` ||
    `mongodb://localhost:27017/mercaditocr`,
}
export default config
