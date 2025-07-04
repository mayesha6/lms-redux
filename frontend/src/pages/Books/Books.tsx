import BookCard from "@/components/module/book/BookCard";
import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/types";
import { useState } from "react";

const Books = () => {
  const [page, setPage] = useState(1);
  const limit = 8;

  const { data, isLoading } = useGetBooksQuery({ page, limit });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto px-3 mt-10">
      <h2 className="pb-20 text-center font-bold text-3xl capitalize">Books</h2>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {!isLoading &&
          data?.data?.map((book: IBook) => {
            return <BookCard key={book._id} book={book} />;
          })}
      </div>
      <div className="flex justify-center gap-4 my-10">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </Button>

        <Button
          variant="outline"
          disabled={page === data?.meta?.totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Books;
