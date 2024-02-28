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

export const createNewPlan = async (payload) => {
  try {
    await PlansService.createPlan(payload);
    return notification.success({
      message: "Plano criado com sucesso!",
    });
  } catch (err) {
    console.log(err);
    return notification.error({
      message: "Erro ao criar plano",
    });
  }
};
