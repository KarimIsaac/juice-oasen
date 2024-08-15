import mongoose from "mongoose";
const mongoDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_DB_Url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 10000,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};
export default mongoDB;