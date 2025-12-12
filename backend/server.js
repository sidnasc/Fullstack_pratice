import express from "express";
import "dotenv/config.js";
import mongoose from "mongoose";

export async function connectToDatabase(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connect to the database.");
    } catch (error) {
        console.error("Error connecting to the database", error);
        process.exit(1);
    }
}

const app = express();

// A correção é aqui: use () => {
app.listen(3000, () => {
    console.log("Server is running on port 3000. CTRL+C to stop . . .")
});