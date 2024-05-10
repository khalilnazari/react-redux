import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./postSlice";

export const rootReducer = combineReducers({
  counter: counterSlice,
});
