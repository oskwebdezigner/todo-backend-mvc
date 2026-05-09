import express from "express"
import CreateTask from "../Controllers/CreateTask.js"
import GetTasks from "../Controllers/GetTasks.js";

const router = express.Router();

router.post("/createtask", CreateTask)

router.get("/", GetTasks)

export default router;