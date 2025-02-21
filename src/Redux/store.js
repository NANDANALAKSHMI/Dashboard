import { configureStore } from "@reduxjs/toolkit";
import sharedReducer from "./slice/sharedSlice";

const store = configureStore({
  reducer: {
    shared: sharedReducer,
  },
});

export default store;
