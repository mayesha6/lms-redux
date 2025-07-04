import { configureStore } from "@reduxjs/toolkit";
// import booksReducer from "./features/book/bookSlice";
import { baseApi } from "./api/baseApi";
export const store = configureStore({
  reducer: {
    // books: booksReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
