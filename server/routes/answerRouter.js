import { Router } from "express";
import answerController from "../controllers/answerController.js";


// Creating sub-router for "Answer" model
const router = new Router();


router.get('/', answerController.getAll);

router.post('/', answerController.create);

router.delete('/:id', answerController.delete);


export default router;