import { Router } from "express";
import categoryController from "../controllers/categoryController.js";


// Creating sub-router for "Category" model
const router = new Router();


router.post('/', categoryController.create);


export default router;