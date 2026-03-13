import { Router } from "express";

import { getUsers, createUser, getUserById } from "../controllers/user.controller";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);

export default router
