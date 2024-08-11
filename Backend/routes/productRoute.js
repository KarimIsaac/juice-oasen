import express from "express"
import errorHandler from "../midddleware/errorHandler.js";
const router = express.Router();
import products from "../data/products.js";
import juices from "../data/juices.js";

const app = express();

router.get('/', errorHandler(async(req, res) => {
    res.json(products);
}));

router.get('/api/products', errorHandler(async(req, res) => {
    res.json(products);
}));

// Fixed: Corrected the method to find a single product
router.get('/api/product/:id', (req, res) => {
    const product = products.find((p) => p._id == req.params.id);
    if (product) {
        return res.json(product);
    }
    res.status(404).json({ message: 'Product not found' });
});

router.get('/api/juices', (req, res) => {
    res.json(juices);
});

// Fixed: Added error handling for non-existent juices
router.get('/api/juice/:id', (req, res) => {
    const juice = juices.find((p) => p._id == req.params.id);
    if (juice) {
        return res.json(juice);
    }
    res.status(404).json({ message: 'Juice not found' });
});

export default router;