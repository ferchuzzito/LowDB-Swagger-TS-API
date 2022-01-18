import { Router } from "express";
import { getTasks} from "../controllers/task.controller";

const router = Router()

router.get('/tasks', getTasks)
router.get('/tasks/count', (req, res) => res.send('Hello World!!'))
router.post('/tasks', (req, res) => res.send('Hello World!!'))
router.get('/tasks/:id', (req, res) => res.send('Hello World!!'))
router.delete('/tasks/:id', (req, res) => res.send('Hello World!!'))
router.put('/tasks/:id', (req, res) => res.send('Hello World!!'))

export default router