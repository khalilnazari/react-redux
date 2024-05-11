import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./postSlice";
import authReducer from "./authSlice";
import { api } from "../../api/api";

export const rootReducer = combineReducers({
  counter: counterSlice,
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});
