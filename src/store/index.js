import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./rootReducers";

export default configureStore({
  reducer: reducers,
});
