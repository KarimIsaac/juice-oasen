import express from "express";
import { getJuice, getJuiceById } from "../controllers/juiceController.js";

const router = express.Router();

router.get('/', getJuice);
router.get('/:id', getJuiceById);

export default router;