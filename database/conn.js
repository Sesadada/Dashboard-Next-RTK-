import mongoose from "mongoose";

const MONGOURI = process.env.NEXT_PUBLIC_MONGO_URI;
//const MONGOURI =
// "mongodb+srv://sesadada:445244@dashboardcrud.lulq1es.mongodb.net/?retryWrites=true&w=majority";
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
