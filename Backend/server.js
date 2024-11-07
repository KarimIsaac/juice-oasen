import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoute from "./routes/productRoute.js"
import mongoDB from './db/mongoDB.js'
import juiceRoute from './routes/juiceRoutes.js'
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

dotenv.config();
mongoDB();
app.use('/api/products', productRoute);
app.use('/api/juice', juiceRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
