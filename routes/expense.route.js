import { Router } from "express";
import authorise from "../middlewares/auth.middleware.js";
import { addExpense,deleteExpense,listExpense } from "../controllers/expense.controller.js";
export const expenseRouter = Router();
expenseRouter.post("/add",authorise,addExpense)
expenseRouter.get("/all",authorise,listExpense)
expenseRouter.delete("/delete/:id",authorise,deleteExpense)