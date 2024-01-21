import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { config } from 'dotenv';

config()

export const connectDB = async () => {
   const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.kczo3ai.mongodb.net/?retryWrites=true&w=majority`
   try {
    await mongoose.connect(uri);
    console.log('DB connected')
   } catch (error) {
    console.log(error)
   }
};