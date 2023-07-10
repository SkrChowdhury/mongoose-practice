import { createUser } from "./user.controller";
import express from "express";

const router = express.Router();

router.get("/", createUser);

export default router;
