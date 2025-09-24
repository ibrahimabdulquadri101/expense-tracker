import Expense from "../models/expense.model.js";

export const addExpense = async (req, res, next) => {
  try {
    const expenseCreated = await Expense.create({
      ...req.body,
      userId: req.user && req.user.id,
    });
    res.status(200).json({
      sucess: true,
      expenseCreated,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteExpense = async (req, res, next) => {
  try {
    const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
    res.status(200).json({
      sucesss: true,
      message: "Expense deleted sucessfully",
    });
  } catch (error) {
    next;
  }
};

export const listExpense = async (req, res, next) => {
  try {
    const foundExpense = await Expense.find({});
    res.status(201).json({
      sucess: true,
      foundExpense,
    });
  } catch (error) {
    next(error);
  }
};
