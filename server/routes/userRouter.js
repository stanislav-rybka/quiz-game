import { Router } from "express";
import userController from "../controllers/userController.js";


// Creating sub-router for "User" model
const router = new Router();


router.post('/login', userController.login);

router.post('/register', userController.register);


export default router;