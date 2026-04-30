import mongoose from "mongoose";

export const connectDB = async () => {
  
    await mongoose.connect("mongodb+srv://mohammadsaleh3004_db_user:0p5kWMT7RzdlG3xp@cluster0.ai9w0uf.mongodb.net/Hospisite").then(() => {
        
     console.log("DB connected");   
    })};