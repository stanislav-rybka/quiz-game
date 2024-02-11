import { Router } from "express";
import quizController from "../controllers/quizController.js";


// Creating sub-router for "Category" model
const router = new Router();


router.get('/', quizController.getAll);

router.get('/:id', quizController.getOne);

router.post('/', quizController.create);

router.delete('/:id', quizController.delete);


export default router;