import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pancakes from "./data/pancakes.js"
import juices from  "./data/juices.js"
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
dotenv.config();
app.get('/',(req, res) => {
        res.send('Hello World');
    }
);
app.get('/api/pancakes',(req, res) => {
    res.json(pancakes);
}
);
app.get('/api/pancake/:id',(req, res) => {
    const pancake = pancake.find((p) => p._id == req.params.id)
    res.json(pancake);
});

app.get('/api/juices',(req, res) => {
    res.json(juices);
}
);
app.get('/api/juice/:id',(req, res) => {
    const juice = juice.find((p) => p._id == req.params.id)
    res.json(juice);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
