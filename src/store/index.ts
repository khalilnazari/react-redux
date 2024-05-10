import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducers";

export const store = configureStore({
  reducer: {
    counter: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
