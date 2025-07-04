/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  //   DialogTrigger,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useUpdateBookMutation } from "@/redux/api/baseApi";
import type { IBook } from "@/types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
interface IProps {
  openUpdate: boolean;
  setOpenUpdate: (value: boolean) => void;
  book: IBook;
}
type UpdateBookFormData = Omit<IBook, "_id" | "available">;

const UpdateBookModal = ({ openUpdate, setOpenUpdate, book }: IProps) => {
  const [updateBook, { data }] = useUpdateBookMutation();
  console.log(data);
  const form = useForm<UpdateBookFormData>({
    defaultValues: {
      title: book.title,
      author: book.author,
      genre: book.genre,
      isbn: book.isbn,
      description: book?.description,
      copies: book.copies,
    },
  });
  const onSubmit: SubmitHandler<UpdateBookFormData> = async (data) => {
    try {
      const updateData = {
        ...data,
        copies: Number(data.copies),
      };
      await updateBook({ bookId: book._id, bookData: updateData });
      toast.success(`${data.title} updated successfully!`);
      setOpenUpdate(false);
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  };
  return (
    <Dialog open={openUpdate} onOpenChange={setOpenUpdate}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Book</DialogTitle>
          <DialogDescription>Please update the form.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">author</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Author"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">genre</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select genre" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="FICTION" className="capitalize">
                        FICTION
                      </SelectItem>
                      <SelectItem value="NON_FICTION" className="capitalize">
                        NON_FICTION
                      </SelectItem>
                      <SelectItem value="SCIENCE" className="capitalize">
                        SCIENCE
                      </SelectItem>
                      <SelectItem value="HISTORY" className="capitalize">
                        HISTORY
                      </SelectItem>
                      <SelectItem value="BIOGRAPHY" className="capitalize">
                        BIOGRAPHY
                      </SelectItem>
                      <SelectItem value="FANTASY" className="capitalize">
                        FANTASY
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isbn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">isbn</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ISBN"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} value={field.value || ""} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="copies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">copies</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Copies"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Update Book</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateBookModal;
