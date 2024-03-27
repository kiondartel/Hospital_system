import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createNewPlan,
  deletePlanByName,
  fetchMedicalPlans,
  updatePlan,
} from "../../../../store/Actions/medicalPlansActions";
import { Button, Card, List, Modal, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import CreatePlanModal from "../../components/CreatePlanModal/index";
import EditPlanModal from "../../components/EditPlanModal";
const { Title } = Typography;
const PlansManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const medicalPlans = useSelector((state) => state.medicalPlans);
  const allPlans = medicalPlans.data;
  const dispatch = useDispatch();
  const handleCreatePlan = (planData) => {
    planData.ativo = true;
    dispatch(createNewPlan(planData));
    setIsModalVisible(false);
  };

  const handleUpdatePlan = (codigo, updatedData) => {
    dispatch(updatePlan({ codigo, data: updatedData }));
    closeEditModal();
  };

  const deletePlan = (planName) => {
    dispatch(deletePlanByName(planName));
  };

  const openEditModal = (plano) => {
    setSelectedPlan(plano);
  };

  const closeEditModal = () => {
    setSelectedPlan(null);
  };

  useEffect(() => {
    dispatch(fetchMedicalPlans());
  }, []);

  return (
    <div
      style={{
        margin: "20px",
        backgroundColor: "#f0f2f5",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <Title level={2} style={{ textAlign: "center" }}>
        Planos Parceiros
      </Title>
      <Button
        type="primary"
        onClick={() => setIsModalVisible(true)}
        style={{ marginBottom: 16, backgroundColor: "#847cd6" }}
      >
        Adicionar Plano
      </Button>
      <CreatePlanModal
        isOpen={isModalVisible}
        onOk={handleCreatePlan}
        onCancel={() => setIsModalVisible(false)}
      />
      {selectedPlan && (
        <EditPlanModal
          isOpen={!!selectedPlan}
          onOk={handleUpdatePlan}
          onCancel={closeEditModal}
          plano={selectedPlan}
        />
      )}
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={allPlans}
        renderItem={(plano) => (
          <List.Item>
            <Card
              hoverable
              style={{
                width: "100%",
                backgroundColor: "#fff",
                border: "1px solid #e8e8e8",
                borderRadius: "4px",
                boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
              }}
              title={plano.nome}
              actions={[
                <div
                  style={{
                    backgroundColor: "#a9e5ee",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                >
                  <EditOutlined
                    key="edit"
                    style={{ color: "#000" }}
                    onClick={() => openEditModal(plano)}
                  />
                </div>,
                <div
                  style={{
                    backgroundColor: "#fff0f0",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                >
                  <DeleteOutlined
                    key="delete"
                    onClick={() => deletePlan(plano.nome)}
                    style={{ color: "#ff4d4f" }}
                  />
                </div>,
              ]}
            >
              <div>
                <Title level={5} style={{ marginBottom: 16 }}>
                  Cobertura do plano:
                </Title>
                <p>{plano.procedimentos}</p>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default PlansManagement;
