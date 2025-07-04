import { model, Schema } from "mongoose";
import { IBook } from "../interfaces/book.interface";
import { Borrow } from "./borrow.model";

interface BookDocument extends IBook, Document {
  updateAvailability: () => void;
}


const bookSchema = new Schema<BookDocument>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
      required: true,
    },
    isbn: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    copies: {
      type: Number,
      required: true,
      min: [0, "This book is unavailable, remaining 0 books"],
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

bookSchema.methods.updateAvailability = function () {
  this.available = this.copies > 0;
};

bookSchema.pre("save", function (next) {
  this.updateAvailability()
  next();
});

bookSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Borrow.deleteMany({ book: doc._id });
  }
});


export const Book = model<BookDocument>("Book", bookSchema);
