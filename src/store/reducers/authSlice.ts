import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PayloadType = { email: string; password: string };
type AuthType = {
  token: string | null;
  userInfo: {} | null;
};

const authInitialState: AuthType = {
  token: null,
  userInfo: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState as AuthType,
  reducers: {
    setAuth: (state, action: PayloadAction<PayloadType>) => {
      state.token = "adfadsfadsf";
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.userInfo = null;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
