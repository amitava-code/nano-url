import mongoose from 'mongoose'
import config from '../config/config.js'

export async function connectDB(){
    await mongoose.connect(config.MONGO_URI)
    console.log('DB successfully')
}

