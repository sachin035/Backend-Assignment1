import { Router } from "express";
import {
  getAllTask,
  createTask,
  // updateTask,
  // deleteTask,
} from "../controllers/todo.controller";
import { auth } from "../middleware/auth.middleware";

const todoRouter = Router();
todoRouter.get("/", auth, getAllTask);
todoRouter.post("/", auth, createTask);

// todoRouter.put("/:id", updateTask);
// todoRouter.delete("/:id", deleteTask);

export default todoRouter;
