import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { IBook } from "@/types";

interface IProps {
  openBookDetails: boolean;
  setOpenBookDetails: (value: boolean) => void;
  book: IBook;
}
const BookDetailsModal = ({openBookDetails, setOpenBookDetails, book}: IProps) => {
  return (
    <Dialog open={openBookDetails} onOpenChange={setOpenBookDetails}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-center">Book Details</DialogTitle>
          <h2 className="font-bold text-3xl py-2">{book.title}</h2>
          </DialogHeader>
        <div className="space-y-2">
          <p><span className="font-semibold">Author:</span> {book.author}</p>
          <p><span className="font-semibold">Genre:</span> {book.genre}</p>
          <p><span className="font-semibold">ISBN:</span> {book.isbn}</p>
          <p><span className="font-semibold">Description:</span> {book.description}</p>
          <p><span className="font-semibold">Copies:</span> {book.copies}</p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default BookDetailsModal