import mongoose from "mongoose";

const juiceSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image:{
        type: String,
       
    },
    info:{
        type: String,
        required: true
    }
})

const Juice = mongoose.model("Juice", juiceSchema);
export default Juice;