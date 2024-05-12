import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = () => {
    // console.log(process.env);
    const data = process.env.MONGO;
    console.log('MongoDB URI:', data); 

    mongoose.connect(data ).then(() => {
        console.log('MongoDB connected');
    }).catch((err) => {
        console.error('MongoDB connection error:', err);
    });
}

export default Connection;