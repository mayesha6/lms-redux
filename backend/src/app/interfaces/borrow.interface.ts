import { Date, Types } from "mongoose";

export interface IBorrow {
  book: Types.ObjectId;
  quantity: Number;
  dueDate: Date;
}
