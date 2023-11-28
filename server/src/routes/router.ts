import userRouter from './users/users.router';
import express from 'express';

const router = express.Router();

router.use('/users', userRouter);

export default router;
