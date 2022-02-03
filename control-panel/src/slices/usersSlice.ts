import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserI } from "../types/user";
import { fetchUsers } from "../api";
import { AppThunk } from "../store";

const initialState: {
  users: User[];
  isLoading: boolean;
} = {
  users: [],
  isLoading: true,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    addUser: (state, action: PayloadAction<UserI>) => {
      state.users.push(action.payload);
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { getUsers, addUser, setIsLoading } = userSlice.actions;

export const getUserList = (): AppThunk => async (dispatch) => {
  const users = await fetchUsers();
  dispatch(getUsers(users));
  dispatch(setIsLoading(false));
};
