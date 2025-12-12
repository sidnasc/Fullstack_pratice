import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    subtitle:{
        type:String,
    },
    author:{
        type:String,
    },
    genre:{
        type:String,
    },
    cover:{
        type:String,
    }
}, {Timestamps:true});

export const Book = mongoose.model("Book", bookSchema);