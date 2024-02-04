import { configureStore } from "@reduxjs/toolkit";
import burgerReducer from "./burgerslice";

export const store = configureStore({
  reducer: {
    burger: burgerReducer,
  },
});
