import mongoose from "mongoose";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};

class Connection {
  constructor() {
    try {
      const url =
      // process.env.MONGODB_URI || `mongodb://localhost:27017/TestDB`;
      process.env.MONGODB_URI || `mongodb+srv://mercaditoUser:8fyETnGwivC1RQTb@cluster0-wxxtk.mongodb.net/mercaditocrdb?retryWrites=true&w=majority`;
      console.log("Establish new connection with the DB");
      mongoose.connect(url, options);
    } catch (error) {
      handleError(error);
    }
  }
}

export default new Connection();