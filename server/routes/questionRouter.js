import { Router } from "express";
import questionController from "../controllers/questionController.js";


// Creating sub-router for "Question" model
const router = new Router();


router.get('/', questionController.getAll);

router.post('/', questionController.create);


export default router;