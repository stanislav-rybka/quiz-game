import { Router } from "express";
import categoryController from "../controllers/categoryController.js";


// Creating sub-router for "Category" model
const router = new Router();


router.get('/', categoryController.getAll);

router.post('/', categoryController.create);

router.delete('/:id', categoryController.delete);

export default router;