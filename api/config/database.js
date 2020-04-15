import mongoose from 'mongoose';

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
      const url =
        process.env.MONGODB_URI || `mongodb://localhost:27017/TestDB`;
        // process.env.MONGODB_URI ||
        // 'mongodb+srv://mercaditoUser:8fyETnGwivC1RQTb@cluster0-wxxtk.mongodb.net/mercaditocrdb?retryWrites=true&w=majority';
      // eslint-disable-next-line no-console
      console.log('Establish new connection with the DB');
      mongoose.connect(url, options);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new Connection();
