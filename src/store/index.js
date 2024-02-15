import { configureStore } from "@reduxjs/toolkit";
import sliceMedicalPlans from "./Reducers/medicalPlansReducer";

import planSlice from "./Reducers/selectPlanReducer";
const store = configureStore({
  reducer: {
    medicalPlans: sliceMedicalPlans,
    plan: planSlice,
  },
});

export default store;
