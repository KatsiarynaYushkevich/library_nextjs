import mongoose from "mongoose"

const DATABASE_URI = process.env.DATABASE_URI!

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  return mongoose.connect(DATABASE_URI)
}
