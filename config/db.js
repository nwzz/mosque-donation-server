import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUri = `${process.env.MONGO_URI}`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`Mongodb Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
