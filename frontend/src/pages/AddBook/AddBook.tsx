import { Button } from "@/components/ui/button";
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
import { useCreateBookMutation } from "@/redux/api/baseApi";
import type { IAddBookFormData } from "@/types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const AddBook = () => {
  const form = useForm<IAddBookFormData>();
  const [createBook, { data }] = useCreateBookMutation();
  console.log({ data });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IAddBookFormData> = async (data) => {
    try {
      await createBook({
        ...data,
        available: true,
        copies: Number(data.copies),
      });
      toast.success(`${data.title} added successfully!`);
      form.reset();
      navigate("/books");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage = error?.data?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="container mx-auto px-3">
      <h2 className="mt-14 text-center font-bold text-3xl capitalize">
        Add Book
      </h2>
      <div className="px-6 py-8 my-14 max-w-2xl border-2 mx-auto rounded-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Title"
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

            <Button type="submit">Add Book</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddBook;
