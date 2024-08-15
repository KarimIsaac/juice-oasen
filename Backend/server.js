import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoute from "./routes/productRoute.js"
import mongoDB from './db/mongoDB.js'
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

dotenv.config();
mongoDB();
app.use('/api/products', productRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
