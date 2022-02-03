import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import userSlice from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
