import { Router } from "express";
import userRouter from "./userRouter.js";
import categoryRouter from "./categoryRouter.js";
import answerRouter from "./answerRouter.js";
import questionRouter from "./questionRouter.js";


// Creating global route combining other sub-routers
const router = new Router();


router.use('/user', userRouter);
router.use('/category', categoryRouter);
router.use('/answer', answerRouter);
router.use('/question', questionRouter);


export default router;