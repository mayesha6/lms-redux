import type { IBorrowSummary } from "@/types";

interface IProps {
  borrowSummary: IBorrowSummary;
}
const BorrowSummaryBookCard = ({ borrowSummary }: IProps) => {
  return (
    <div className="border px-5 py-4 rounded-md flex justify-between items-center">
      <div className="">
        <p className="capitalize text-2xl font-semibold pb-3">{borrowSummary.book.title}</p>
        <p className="capitalize"><span className="font-semibold">ISBN: </span>{borrowSummary.book.isbn}</p>
        <p className="capitalize"><span className="font-semibold">totalQuantity: </span>{borrowSummary.totalQuantity}</p>
      </div>
    </div>
  );
};

export default BorrowSummaryBookCard;
