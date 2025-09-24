import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Name of expenses is required"],
    trim: true,
  },
  Amount: {
    type: Number,
    required: [true, "Amount must be specified"],
  },
  Currency: {
    type: String,
    enum: ["USD", "GBP", "NGN"],
  },
});

const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;
