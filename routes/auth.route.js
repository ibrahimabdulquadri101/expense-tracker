import { Router } from "express";
import { Signin, Signup } from "../controllers/auth.controller.js";

export const AuthRouter = Router();
AuthRouter.post("/sign-up", Signup);
AuthRouter.post("/sign-in", Signin);
