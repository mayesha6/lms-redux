import express, { NextFunction, Request, Response } from "express";
import { Borrow } from "../models/borrow.model";
import { Book } from "../models/book.model";
import { borrowedBookSummary } from "../services/borrow.services";

export const borrowRoutes = express.Router();

borrowRoutes.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const borrowedBook = await borrowedBookSummary();
      res.status(200).json({
        success: true,
        message: "Borrowed books summary retrieved successfully.",
        data: borrowedBook,
      });
    } catch (error: any) {
      next(error);
    }
  }
);
borrowRoutes.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      const { book, quantity, dueDate } = body;
      if (!book || !quantity || !dueDate) {
        res.status(400).json({
          success: false,
          message: "Book ID, quantity, and due date are required",
        });
        return;
      }
      const getBook = await Book.findById(book);

      if (!getBook) {
        res.status(404).json({
          success: false,
          message: `Book not found.`,
        });
        return;
      }
      if (getBook?.copies < quantity) {
        res.status(400).json({
          success: false,
          message: `You want ${quantity}, but we have only ${getBook?.copies}.`,
        });
        return;
      }
      getBook.copies -= quantity;
      getBook?.updateAvailability();
      await getBook.save();
      console.log(getBook);
      const borrow = await Borrow.create(body);

      res.status(201).json({
        success: true,
        message: "Book borrowed successfully",
        data: borrow,
      });
    } catch (error) {
      next(error);
    }
  }
);
