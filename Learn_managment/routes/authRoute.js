import express from "express";
import {registerController,loginController,testController} from '../controllers/authController.js'
import { requireSignin, isAdmin} from "../middlewares/authMiddleware.js";
// route object
const router = express.Router()

// routing || mesthod post
router.post('/register',registerController)


// lOGIN ||Post
router.post('/login',loginController)

// 
router.get('/test',requireSignin,isAdmin,testController)

export default router