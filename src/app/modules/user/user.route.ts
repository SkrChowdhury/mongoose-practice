import { createUser, getUserByID, getUsers } from "./user.controller";

import express from "express";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserByID);
router.post("/create-user", createUser);

export default router;
