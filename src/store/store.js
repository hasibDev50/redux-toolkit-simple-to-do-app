import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  // reducer in nothing but an object
  reducer: todoReducer,
});
