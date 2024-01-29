import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setMedicalPlans } = sliceMedicalPlans.actions;
export default sliceMedicalPlans.reducer;
