import { configureStore } from "@reduxjs/toolkit";
import sliceMedicalPlans from "./Reducers/medicalPlansReducer";

import planSlice from "./Reducers/selectPlanReducer";
import listUsersSlice from "./Reducers/useListRuducer";
const store = configureStore({
  reducer: {
    medicalPlans: sliceMedicalPlans,
    plan: planSlice,
    users: listUsersSlice,
  },
});

export default store;
