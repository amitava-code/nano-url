import mongoose from 'mongoose'

const shortUrlSchema = new mongoose.Schema({
    

    full_url:{
        type: String,
        required: true
    },
    short_url:{
        type: String,
        required: true,
        index: true,
        unique: true
    },
    clicks:{
        type: Number,
        required: true,
        default: 0
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,  // Auth wala part ke liye 
        ref: "user"
    }
  

})

const shortUrlModel = mongoose.model("shortUrl", shortUrlSchema)

export default shortUrlModel
