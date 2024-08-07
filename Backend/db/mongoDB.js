import mongoose from "mongoose";

const mongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.Mongo_DB_Url, {
           
        });
        console.log("MongoDB connected successful");
    } catch (error) {
        console.error("MongoDB connected failed");
    }
}
export default mongoDB