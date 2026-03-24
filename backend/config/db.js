import mongoose from "mongoose";

export const connectDB = async () => {
  
    await mongoose.connect("mongodb+srv://mohammadsaleh3004_db_user:K0TCXETirurscpGz@cluster0.nu7pbbp.mongodb.net/Hospitex").then(() => {
        
     console.log("DB connected");   
    })};