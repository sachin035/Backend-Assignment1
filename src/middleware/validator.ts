import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";
import BadRequestError from "../error/badRequestError";

export const validateReqQuery =
  (schema: Schema) => (req: Request, _res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.query);
    if (error) throw new BadRequestError(error.message);
    next();
  };

export const validateReqBody =
  (schema: Schema) => (req: Request, _res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) throw new BadRequestError(error.message);
    next();
  };
