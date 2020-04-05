import mongoose from "mongoose";

class Connection {
  constructor() {
    const url =
      // process.env.MONGODB_URI || `mongodb://localhost:27017/TestDB`;
      process.env.MONGODB_URI || `mongodb+srv://mercaditoUser:8fyETnGwivC1RQTb@cluster0-wxxtk.mongodb.net/mercaditocrdb?retryWrites=true&w=majority`;
    console.log("Establish new connection with the DB");
    mongoose.Promise = global.Promise;
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);
    mongoose.set("useUnifiedTopology", true);
    mongoose.connect(url);
  }
}

export default new Connection();