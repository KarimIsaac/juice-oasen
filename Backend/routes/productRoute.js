import express from "express"
const router = express.Router();
import errorHandler from "../middleware/errorHandler.js";
import { getProducts, getProductById} from "../controllers/productController.js"

router.get('/', getProducts);
router.get('/:id', getProductById); 




export default router;


/*router.get('/api/juices', (req, res) => {
    res.json(juices);
});

// Fixed: Added error handling for non-existent juices
router.get('/api/juice/:id', (req, res) => {
    const juice = juices.find((p) => p._id == req.params.id);
    if (juice) {
        return res.json(juice);
    }
    res.status(404).json({ message: 'Juice not found' });
});*/