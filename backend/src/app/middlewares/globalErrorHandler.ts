import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.name === "ValidationError") {
    res.status(400).json({
      message: "Validation failed",
      success: false,
      error: {
        name: error.name,
        errors: error.errors,
      },
    });
    return;
  }

  if (error.name === "CastError") {
    res.status(400).json({
      message: `Invalid ${error.path}: ${error.value}`,
      success: false,
      error: {
        name: error.name,
        path: error.path,
        value: error.value,
        kind: error.kind,
      },
    });
    return;
  }

  res.status(error.statusCode || 500).json({
    message: error.message || "Something went wrong from global error handler.",
    success: false,
    error: {
      name: error.name,
      errors: error.errors || null,
    },
  });
};
