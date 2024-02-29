import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createNewPlan,
  deletePlanByName,
  fetchMedicalPlans,
} from "../../../../store/Actions/medicalPlansActions";
import { List, Button } from "antd";
import {
  PlanActions,
  PlanName,
  PlanValue,
  StyledCard,
  StyledListItem,
} from "./styles";

import CreatePlanModal from "../../components/CreatePlanModal/index";

const PlansManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const medicalPlans = useSelector((state) => state.medicalPlans);
  const allPlans = medicalPlans.data;
  const dispatch = useDispatch();

  const handleCreatePlan = (planData) => {
    planData.ativo = true;
    dispatch(createNewPlan(planData));
    setIsModalVisible(false);
  };

  const deletePlan = (planName) => {
    dispatch(deletePlanByName(planName));
  };

  useEffect(() => {
    dispatch(fetchMedicalPlans());
  }, []);

  return (
    <StyledCard title="Planos">
      <Button
        type="primary"
        onClick={() => setIsModalVisible(true)}
        style={{ marginBottom: 16 }}
      >
        Adicionar Plano
      </Button>
      <CreatePlanModal
        isOpen={isModalVisible}
        onOk={handleCreatePlan}
        onCancel={() => setIsModalVisible(false)}
      />
      <List
        dataSource={allPlans}
        renderItem={(plano) => (
          <StyledListItem key={plano.codigo}>
            <div>
              <PlanName>{plano.nome}</PlanName>
              <PlanValue>- R$ {plano.valor}</PlanValue>
            </div>
            <PlanActions>
              <Button type="primary">Editar</Button>
              <Button type="danger" onClick={() => deletePlan(plano.nome)}>
                Deletar
              </Button>
            </PlanActions>
          </StyledListItem>
        )}
      />
    </StyledCard>
  );
};

export default PlansManagement;
