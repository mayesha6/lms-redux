import type { IPagination } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_API_BASE_URL;
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["book", "borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query<IPagination, { page: number; limit: number } | void>({
      query: (params) => {
        const page = params?.page ?? 1;
        const limit = params?.limit ?? 10;
        return `/books?page=${page}&limit=${limit}`;
      },
      providesTags: ["book"],
    }),
    getBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["book"],
    }),
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books/create-book",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["book"],
    }),
    updateBook: builder.mutation({
      query: ({ bookId, bookData }) => ({
        url: `/books/edit-book/${bookId}`,
        method: "PUT",
        body: bookData,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),

    borrowSummary: builder.query({
      query: () => "/borrow",
      transformResponse: (response) => response.data,
      providesTags: ["borrow"],
    }),
    borrowBook: builder.mutation({
      query: (borrowBookData) => ({
        url: `/borrow`,
        method: "POST",
        body: borrowBookData,
      }),
      invalidatesTags: ["book", "borrow"],
    }),
  }),
});
export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowSummaryQuery,
  useBorrowBookMutation,
} = baseApi;
