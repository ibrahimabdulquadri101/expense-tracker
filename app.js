import express, { json } from "express";
import connectToDatabase from "./database/db.js";
import { AuthRouter } from "./routes/auth.route.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import { expenseRouter } from "./routes/expense.route.js";
const app = express();
app.use(express.json());
app.use(errorMiddleware)
app.use("/api/v1/auth",AuthRouter)
app.use("/api/v1/expense",expenseRouter)
app.listen(3000, (req, res) => {
  console.log("App up and running");
  connectToDatabase();
});
