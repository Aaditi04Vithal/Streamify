import mongoose from "mongoose";
import dns from "dns";

// Set DNS servers to Google and Cloudflare to resolve Jio/Reliance SRV DNS lookup issues
dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error in connecting to MongoDB", error);
    process.exit(1); // 1 means failure
  }
};

