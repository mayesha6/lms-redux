export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
}
export interface IBorrowSummary {
  _id: string;
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity:number
}
export interface IBorrowFormData {
  quantity: number;
  dueDate: Date | undefined;
}
export interface IAddBookFormData {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: string;
}
export interface IPagination {
  data: IBook[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}


