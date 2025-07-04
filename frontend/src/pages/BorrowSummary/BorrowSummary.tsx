import BorrowSummaryBookCard from "@/components/module/borrow/BorrowSummaryBookCard";
import { useBorrowSummaryQuery } from "@/redux/api/baseApi";
import type { IBorrowSummary } from "@/types";

export const BorrowSummary = () => {
  const { data, isLoading } = useBorrowSummaryQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container mx-auto px-3 mt-10">
      <h2 className="pb-14 text-center font-bold text-3xl capitalize">
        Borrowed books
      </h2>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {!isLoading &&
          data?.map((borrowSummary: IBorrowSummary) => {
            return (
              <BorrowSummaryBookCard
                key={borrowSummary._id}
                borrowSummary={borrowSummary}
              />
            );
          })}
      </div>
    </div>
  );
};
