import { Request, Response } from "express";
import todos from "../util/todos";

export const getTodos = (req: Request, res: Response) => {
  res.json(todos);
};

export const createTodo = (req: Request, res: Response) => {
  const todo = {
    id: todos.length + 1,
    title: req.body.title,
    completed: req.body.completed,
    userid: req.body.userid,
  };
  todos.push(todo);
  res.status(201).json(todo);
};

export const updateTodo = (req: Request, res: Response) => {
  const todo = todos.find((u) => u.id === parseInt(req.params.id));
  if (!todo)
    return res.status(404).send("The todo with the given ID was not found.");
  todo.title = req.body.title;
  todo.completed = req.body.completed;
  res.json(todo);
};

export const deleteTodo = (req: Request, res: Response) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo)
    return res.status(404).send("The todo with the given ID was not found.");
  const index = todos.indexOf(todo);
  todos.splice(index, 1);
  res.json(todo);
};
