// userRoutes.js

import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/userController"; // Import controller functions

const router = Router();

// CREATE
router.post("/", createUser);

// GET ALL Users
router.get("/", getAllUsers);

export default router; // Export the router using ES6 syntax
