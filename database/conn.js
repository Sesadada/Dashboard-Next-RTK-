import mongoose from "mongoose";

const MONGOURI = process.env.MONGO_URI;
const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGOURI);
    if (connection.readyState == 1) {
      console.log("database connected");
    }
  } catch (err) {
    return Promise.reject(err);
  }
};

export default connectMongo;
