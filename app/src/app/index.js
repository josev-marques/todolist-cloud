import express from 'express'
import taskRouter from './controllers/task';

const router = express();
router.disable("x-powered-by")

router.use('/tarefas', taskRouter)

export default router;
