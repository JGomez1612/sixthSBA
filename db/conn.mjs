import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.mongoURI || "";

async function connectDB() {
    try {
        await mongoose.connect(connectionString);
        console.log(`MongoDB Connected...`)
    } catch (error) {
        console.error(error.message)
    }
}

export default connectDB