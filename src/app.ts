import { Schema, model } from "mongoose";
import express, { Application, NextFunction, Request, Response } from "express";

import cors from "cors";

const app: Application = express();

// Using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // inserting a test data into mongodb
  /*

  * Step 1: Interface
  * Step 2: Schema
  * Step 3 : Model
  * Step 4 : Database Query On Model

  */

  // creating an interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

  // creating Schema using interface
  const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    dateOfBirth: { type: String },
    gender: { type: String, enum: ["male", "female"] },
    email: { type: String },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
  });

  const User = model<IUser>("User", userSchema);

  const createUserToDB = async () => {
    const user = new User({
      id: "4345443",
      role: "student",
      password: "nsujss7",
      name: {
        firstName: "Sakkhor",
        middleName: "",
        lastName: "Chowdhury",
      },
      dateOfBirth: "",
      gender: "male",
      email: "",
      contactNo: "0980808",
      emergencyContactNo: "9797979",
      presentAddress: "Dhaka",
      permanentAddress: "CTG",
    });
    await user.save();
    console.log(user);
  };

  createUserToDB();
  //   res.send("Hello World!");
  //   next();
});

export default app;
