import express, { Application } from "express";

import cors from "cors";
import userRoutes from "./app/modules/user/user.route";

const app: Application = express();

// * * Application routes

// Using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/v1/user", userRoutes);
app.use("/api/v1/user", userRoutes);

export default app;

/*

! Pattern MVC, Modular

* * Interface interface.ts
* * Schema, Model -> model.ts

* * Route

* * Route Function -> controller.ts

* * Database Query Function -> service.ts

*/
