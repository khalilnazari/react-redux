import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./postSlice";
import { authReducer } from "./authSlice";

export const rootReducer = combineReducers({
  counter: counterSlice,
  auth: authReducer,
});
