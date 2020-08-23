/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarr�a
 * Github: @josechavarriacr
 */
import mongoose from 'mongoose';
import config from './env'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false,
  poolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
};

class Connection {
  constructor() {
    try {
      console.log('Establish new connection with the DB');
      mongoose.connect(config.mongodbUrl, options);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new Connection();
