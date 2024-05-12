import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./postSlice";
import authReducer from "./authSlice";
import formControlReducer from "./formControlSlice";
import { api } from "../../api/api";

export const rootReducer = combineReducers({
  counter: counterSlice,
  auth: authReducer,
  formControls: formControlReducer,
  [api.reducerPath]: api.reducer,
});
