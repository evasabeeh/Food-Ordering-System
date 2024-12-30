import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose
        .connect(process.env.MONGO)                       // database url
        .then(() => console.log("Database is connected"))
        .catch((e) => console.log(e));
};