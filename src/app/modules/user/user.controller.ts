import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserFromDB } from "./user.service";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const user = await createUserToDB(data);
  res.status(200).json({
    status: "success",
    data: user,
  });

  // inserting a test data into mongodb
  /*

  * Step 1: Interface
  * Step 2: Schema
  * Step 3 : Model
  * Step 4 : Database Query On Model

  */
  //   res.send("Hello World!");
  //   next();
};

// * * Route -> controller -> service

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUserFromDB();
  res.status(200).json({
    status: "success",
    data: user,
  });
};
