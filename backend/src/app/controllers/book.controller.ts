import express, { NextFunction, Request, Response } from "express";
import { Book } from "../models/book.model";

export const bookRoutes = express.Router();

bookRoutes.post(
  "/create-book",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      const book = await Book.create(body);

      res.status(201).json({
        success: true,
        message: "Book created successfully.",
        data: book,
      });
    } catch (error: any) {
      next(error);
    }
  }
);

bookRoutes.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const bookGenre = req.query.filter as string;
    const sortBy = (req.query.sortBy as string) || "createdAt";
    const sort = (req.query.sort as string) === "desc" ? -1 : 1;

    let query = Book.find();
    if (bookGenre) {
      query = Book.find({ genre: bookGenre });
    }

    const total = await query.clone().countDocuments();

    const books = await query
      .sort({ [sortBy]: sort })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      message: "Books retrieved successfully.",
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
      data: books,
    });
  } catch (error: any) {
    next(error);
  }
});

bookRoutes.get(
  "/:bookId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookId = req.params.bookId;
      const book = await Book.findById(bookId);
      if (!book) {
        res.status(404).json({
          success: false,
          message: "Book not found.",
        });
        return;
      }

      res.status(201).json({
        success: true,
        message: "Book retrieved successfully",
        data: book,
      });
    } catch (error: any) {
      next(error);
    }
  }
);
bookRoutes.put(
  "/edit-book/:bookId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookId = req.params.bookId;
      const updateBook = req.body;
      const book = await Book.findById(bookId);
      if (!book) {
        res.status(404).json({
          success: false,
          message: "Book not found",
        });
        return;
      }

      Object.assign(book, updateBook);
      await book.save();

      res.status(201).json({
        success: true,
        message: "Book updated successfully",
        data: book,
      });
    } catch (error: any) {
      next(error);
    }
  }
);
bookRoutes.delete(
  "/:bookId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookId = req.params.bookId;
      const book = await Book.findByIdAndDelete(bookId);

      if (!book) {
        res.status(404).json({
          success: false,
          message: "Book not found.",
        });
        return;
      }
      res.status(201).json({
        success: true,
        message: "Book deleted successfully",
        data: null,
      });
    } catch (error: any) {
      next(error);
    }
  }
);
