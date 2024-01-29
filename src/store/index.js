import { configureStore } from "@reduxjs/toolkit";
import sliceMedicalPlans from "./Reducers/medicalPlansReducer";
const store = configureStore({
  reducer: {
    medicalPlans: sliceMedicalPlans,
  },
});

export default store;
