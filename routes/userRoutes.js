

// import { getAllUsers, getUserById, addUser } from "../controllers/userController.js";

// router.get("/", getAllUsers);
// router.get("/:id", getUserById);
// router.post("/", addUser);

// export default router;
import express from "express";

import {getUsers, createUsers} from "../controllers/userController.js";
const router = express.Router();

router.get("/users/:id", getUsers);
router.post("/users", createUsers);
export default router;