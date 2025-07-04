import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm, type SubmitHandler } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useBorrowBookMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import type { IBorrowFormData } from "@/types";

interface IProps {
  bookId: string;
  copies: number;
}
export function BorrowBookModal({ bookId, copies }: IProps) {
  const [open, setOpen] = useState(false);
  const form = useForm<IBorrowFormData>({
    defaultValues: {
      quantity: 1,
      dueDate: undefined,
    },
  });
  const [borrowBook, { data }] = useBorrowBookMutation();
  console.log(data);
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IBorrowFormData> = async (data) => {
    if (Number(data.quantity) > copies) {
      toast.error(`${copies} copy available.`);
      return;
    }
    if (!data.dueDate) {
      toast.error("Please select a due date");
      return;
    }
    try {
      await borrowBook({
        book: bookId,
        quantity: Number(data.quantity),
        dueDate: data.dueDate.toISOString(),
      });
      toast.success(`Borrowed a book successfully!`);
      form.reset();
      setOpen(false);
      navigate("/borrow");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Borrow Book</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Borrow book</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="mt-3">Due Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        captionLayout="dropdown"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="mt-5">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
