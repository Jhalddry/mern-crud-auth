import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controllers/task-controller.js";
import { createTaskSchema } from '../schemas/task.schema.js'
import { validateSchema } from "../middlewares/validatorMiddleware.js";

const router = Router()

router.get('/task', authRequired, getTasks)
router.get('/task/:id', authRequired, getTask)
router.post('/add-task', authRequired, validateSchema(createTaskSchema), createTask)
router.delete('/task/:id', authRequired, deleteTask)
router.put('/task/:id', authRequired, updateTask)

export default router;