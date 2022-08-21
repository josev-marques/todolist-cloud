import express from 'express'
import taskRouter from './controllers/task.js';

const router = express();
router.disable("x-powered-by")

router.use('/tarefas', taskRouter)

export default router;
