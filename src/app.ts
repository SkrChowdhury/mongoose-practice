import { Schema, model } from 'mongoose';
import express, { Application, NextFunction, Request, Response } from 'express';

import cors from 'cors';

const app: Application = express();

// Using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  // inserting a test data into mongodb
  /*

  * Step 1: Interface
  * Step 2: Schema
  * Step 3 : Model
  * Step 4 : Database Query On Model

  */

  const createUserToDB = async () => {
    const user = new User({
      id: '43443',
      role: 'student',
      password: 'nsujss7',
      name: {
        firstName: 'Sakkhor',
        middleName: '',
        lastName: 'Chowdhury',
      },
      dateOfBirth: '',
      gender: 'male',
      email: '',
      contactNo: '0980808',
      emergencyContactNo: '9797979',
      presentAddress: 'Dhaka',
      permanentAddress: 'CTG',
    });
    await user.save();
    console.log(user);
  };

  createUserToDB();
  //   res.send("Hello World!");
  //   next();
});

export default app;

/*

! Pattern MVC, Modular

* * Interface interface.ts
* * Schema, Model -> model.ts

* * Route

* * Route Function -> controller.ts

* * Database Query Function -> service.ts

*/
