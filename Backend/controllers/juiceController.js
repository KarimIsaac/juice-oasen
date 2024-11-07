import Juice from "../models/juice.model.js";
import errorHandler from "../middleware/errorHandler.js";

const getJuice = errorHandler(async (req, res) => {
    const juice = await Juice.find({});
    res.json(juice);
}
)

const getJuiceById = errorHandler(
async (req, res) => {
    console.log("juice ID:", req.params.id);
    const juice = await Juice.findById(req.params.id);
    if (juice) {
        res.json(juice);
    } else {
        res.status(404);
        throw new Error("juice not found");
    }
})

export { getJuiceById, getJuice };