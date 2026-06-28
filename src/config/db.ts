import mongoose from "mongoose";
import dns from "dns"

const connectDB = async (): Promise<void> => {
  try {

    dns.setServers(['8.8.8.8', '1.1.1.1']);
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI is not defined");


    const conn = await mongoose.connect(uri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;