import { getAllPlans } from "../../service/MedicalPlans";
import { setMedicalPlans } from "../Reducers/medicalPlansReducer";

export const fetchMedicalPlans = () => async (dispath) => {
  try {
    const plans = await getAllPlans();
    dispath(setMedicalPlans(plans));
  } catch (err) {
    console.error(err);
  }
};
