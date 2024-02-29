import { createSlice } from "@reduxjs/toolkit";
import {
  createNewPlan,
  deletePlanByName,
} from "../Actions/medicalPlansActions";

const initialState = {
  plano: {
    codigo: 0,
    nome: "",
    valor: 0,
    ativo: false,
  },
};

const sliceMedicalPlans = createSlice({
  name: "medicalPlans",
  initialState,
  reducers: {
    setMedicalPlans: (state, { payload }) => {
      state.data = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deletePlanByName.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (plano) => plano.nome !== action.payload
        );
      })
      .addCase(createNewPlan.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
      });
  },
});

export const { setMedicalPlans } = sliceMedicalPlans.actions;
export default sliceMedicalPlans.reducer;
