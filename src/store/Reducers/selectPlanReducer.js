import { createSlice } from "@reduxjs/toolkit";

export const planSlice = createSlice({
  name: "plan",
  initialState: {
    selectedPlan: null,
  },
  reducers: {
    setSelectedPlan: (state, { payload }) => {
      state.selectedPlan = payload;
    },
  },
});

export const { setSelectedPlan } = planSlice.actions;
export default planSlice.reducer;
