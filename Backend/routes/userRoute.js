import express from 'express'
import { RegisterUser, loginUser } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.post('/register', RegisterUser)
userRouter.post('/login', loginUser)

export default userRouter