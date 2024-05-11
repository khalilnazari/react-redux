import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    setAuth: (state, action: PayloadAction<AuthType>) => {
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
    },
    logout: (state) => {
      state.token = null;
      state.userInfo = null;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
