import mongoose from "mongoose";
import dns from "dns";

// Set DNS servers to Google and Cloudflare ONLY locally to resolve Jio/Reliance SRV DNS lookup issues.
// Do not run this on Vercel/production as it will break database hostname resolution.
if (!process.env.VERCEL && process.env.NODE_ENV !== "production") {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
}

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error in connecting to MongoDB", error);
    process.exit(1); // 1 means failure
  }
};

