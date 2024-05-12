import { createSlice } from "@reduxjs/toolkit";
import { controls } from "../../components/form/formControls";

const initialState = {
  loginControls: controls.login,
  postControls: controls.post,
};

const formControlSlice = createSlice({
  name: "formControl",
  initialState,
  reducers: {},
});

export const formControlActions = formControlSlice.actions;
export default formControlSlice.reducer;
