import mongoose from "mongoose";

export const connectDB = async () =>{
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://viveklokannavar5058:123456viv@cluster0.6sdhs.mongodb.net/restMenu';
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1);
    }
}
