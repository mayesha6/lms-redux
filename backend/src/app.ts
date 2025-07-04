import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { bookRoutes } from "./app/controllers/book.controller";
import { borrowRoutes } from "./app/controllers/borrow.controller";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api/books", bookRoutes);
app.use("/api/borrow", borrowRoutes);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Library Management System...",
  });
});
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    message: "Route not found.",
  });
});
app.use(globalErrorHandler);

export default app;
