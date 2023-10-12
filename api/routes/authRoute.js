import express from "express";
import { register, signin } from "../controllers/authCtrl.js";

const router = express.Router();

router.post("/register", register);
router.post("/sign-in", signin);

export default router;
