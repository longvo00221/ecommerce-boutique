import express from 'express'
import cors from 'cors'
import userRouter from './user.route.js'
const router = express.Router()
router.use(cors({origin:"*"}))

router.use('/users',userRouter);

export default router