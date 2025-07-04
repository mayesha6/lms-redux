import { Button } from "@/components/ui/button";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import type { IBook } from "@/types";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import UpdateBookModal from "./UpdateBookModal";
import BookDetailsModal from "./BookDetailsModal";
import { BorrowBookModal } from "../borrow/BorrowBookModal";
interface IProps {
  book: IBook;
}

const BookCard = ({ book }: IProps) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openBookDetails, setOpenBookDetails] = useState(false);
  const [deleteBook, { isLoading }] = useDeleteBookMutation();
  const handleDeleteBook = () => {
    if (confirm(`Do you want to remove ${book.title}?`)) {
      deleteBook(book._id);
    }
  };

  return (
    <>
      <div className="">
        <div className="border px-5 py-4 rounded-md flex flex-col justify-between ">
          <div className="">
            <h2 className="capitalize font-semibold text-2xl pb-2">{book.title}</h2>
            <p className="capitalize"><span className="font-semibold">author: </span>{book.author}</p>
            <p className="capitalize"><span className="font-semibold">genre: </span>{book.genre}</p>
            <p className="capitalize"><span className="font-semibold">isbn: </span>{book.isbn}</p>
            <p className="capitalize"><span className="font-semibold">copies: </span>{book.copies}</p>
            <p className="capitalize"><span className="font-semibold">availability: </span>{book.available}</p>
          </div>
          <div className="flex items-center justify-between pt-3">
            <Button
              className="p-0 text-red-400 cursor-pointer"
              variant="link"
              onClick={() => setOpenUpdate(true)}
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : <Pencil />}
            </Button>
            <Button
              className="cursor-pointer"
              variant="destructive"
              onClick={() => setOpenBookDetails(true)}
              disabled={isLoading}
            >
              {isLoading ? "Searching..." : "Details"}
            </Button>
            <Button
              className="p-0 text-red-400 cursor-pointer"
              variant="link"
              onClick={handleDeleteBook}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : <Trash2 />}
            </Button>
            {!book.available ? (
              <Button variant="destructive" disabled>
                Unavailable
              </Button>
            ) : (
              <BorrowBookModal bookId={book._id} copies={book.copies}/>
            )}
          </div>
        </div>
      </div>

      <UpdateBookModal
        openUpdate={openUpdate}
        setOpenUpdate={setOpenUpdate}
        book={book}
      />
      <BookDetailsModal
        openBookDetails={openBookDetails}
        setOpenBookDetails={setOpenBookDetails}
        book={book}
      />
    </>
  );
};

export default BookCard;
