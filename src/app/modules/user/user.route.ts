import { createUser, getUsers } from "./user.controller";

import express from "express";

const router = express.Router();

router.get("/", getUsers);
router.post("/create-user", createUser);

export default router;
