import express from "express";
const router = express.Router();

import { getAllUsers, getUserById, addUser } from "../controllers/userController.js";

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", addUser);

export default router;