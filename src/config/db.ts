import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI is not defined in .env");

    const conn = await mongoose.connect('mongodb+srv://hassandev1241_db_user:vcnbqBX4BIEWkILv@cluster0.jivjpcv.mongodb.net/test?appName=Cluster0');
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;