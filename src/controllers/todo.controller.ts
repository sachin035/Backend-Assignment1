import { NextFunction, Request, Response } from "express";
import HttpStatus from "http-status-codes";
import { Itask } from "../interface/task";
import * as task from "../service/todo.services";

interface ExtendedRequest extends Request {
  user_id: number;
}
export async function createTask(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // console.log(req.body);
  const extendedRequest = req as ExtendedRequest;
  console.log("saclajs", extendedRequest.user_id);

  // console.log({ getPhoto });

  const profileData: Itask = {
    ...req.body,
    user_id: extendedRequest.user_id,
  };
  console.log({ profileData });

  try {
    const data = await task.createTask(profileData);
    return res.status(HttpStatus.CREATED).json(data);
  } catch (error) {
    next(error);
  }
}

export async function getAllTask(req: Request, res: Response) {
  try {
    console.log("hello");
    const profile = await task.getAllTask();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}

// import { Request, Response } from "express";
// import todos from "../util/todos";

// export const getTodos = (req: Request, res: Response) => {
//   res.json(todos);
// };

// export const createTodo = (req: Request, res: Response) => {
//   const todo = {
//     id: todos.length + 1,
//     title: req.body.title,
//     completed: req.body.completed,
//     userid: req.body.userid,
//   };
//   todos.push(todo);
//   res.status(201).json(todo);
// };

// export const updateTodo = (req: Request, res: Response) => {
//   const todo = todos.find((u) => u.id === parseInt(req.params.id));
//   if (!todo)
//     return res.status(404).send("The todo with the given ID was not found.");
//   todo.title = req.body.title;
//   todo.completed = req.body.completed;
//   res.json(todo);
// };

// export const deleteTodo = (req: Request, res: Response) => {
//   const todo = todos.find((t) => t.id === parseInt(req.params.id));
//   if (!todo)
//     return res.status(404).send("The todo with the given ID was not found.");
//   const index = todos.indexOf(todo);
//   todos.splice(index, 1);
//   res.json(todo);
// };
