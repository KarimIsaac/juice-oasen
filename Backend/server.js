import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoute from "./routes/productRoute.js"
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
dotenv.config();

app.use('/api/products', productRoute);
app.use('/api/juices', productRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
