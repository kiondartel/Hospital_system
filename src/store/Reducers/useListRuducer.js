import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const listUsersSlice = createSlice({
  name: "listUsers",
  initialState,
  reducers: {
    setListUsers: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setListUsers } = listUsersSlice.actions;
export default listUsersSlice.reducer;
