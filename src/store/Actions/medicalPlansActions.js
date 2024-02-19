import { PlansService } from "../../service/partageApi/MedicalPlansService";
import { setMedicalPlans } from "../Reducers/medicalPlansReducer";

export const fetchMedicalPlans = () => async (dispatch) => {
  try {
    const response = await PlansService.getAllPlans();
    dispatch(setMedicalPlans(response.data));
  } catch (err) {
    console.error(err);
  }
};
