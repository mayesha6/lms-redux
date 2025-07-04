export interface IBook {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
}
