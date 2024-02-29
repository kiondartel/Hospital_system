import { createAsyncThunk } from "@reduxjs/toolkit";
import { PlansService } from "../../service/partageApi/MedicalPlansService";
import { setMedicalPlans } from "../Reducers/medicalPlansReducer";
import { notification } from "antd";

export const fetchMedicalPlans = () => async (dispatch) => {
  try {
    const response = await PlansService.getAllPlans();
    dispatch(setMedicalPlans(response.data));
  } catch (err) {
    console.error(err);
    return notification.error({
      message: "Erro ao buscar planos",
    });
  }
};

export const createNewPlan = createAsyncThunk(
  "medicalPlans/createNewPlan",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await PlansService.createPlan(payload);
      notification.success({
        message: "Plano criado com sucesso!",
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.data);
    }
  }
);

export const deletePlanByName = createAsyncThunk(
  "medicalPlans/deletePlanByName",
  async (planName, { rejectWithValue }) => {
    try {
      const deletePlan = await PlansService.deletePlan(planName);
      const message = deletePlan.data;
      notification.success({
        message: message,
      });
      return planName;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.data);
    }
  }
);
