import React, { useEffect } from "react";
import { Form, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "./styles";
import { FaMarkdown } from "react-icons/fa";
import { fetchMedicalPlans } from "../../../../store/Actions/medicalPlansActions";
import { setSelectedPlan } from "../../../../store/Reducers/selectPlanReducer";
import { CustomIcon } from "../../../../components/CustomIcon";
const { Option } = Select;

const Planos = () => {
  const dispatch = useDispatch();
  const medicalPlans = useSelector((state) => state.medicalPlans);

  const handleChange = (name) => {
    const selectedPlan = medicalPlans.data.filter((plan) => plan.nome === name);
    dispatch(setSelectedPlan(selectedPlan));
  };

  useEffect(() => {
    dispatch(fetchMedicalPlans());
  }, []);

  return (
    <Container>
      <Form.Item
        name="plano"
        label={
          <>
            <CustomIcon icon={<FaMarkdown />} /> Planos
          </>
        }
        rules={[{ required: true, message: "Por favor, selecione seu Plano!" }]}
      >
        <Select onChange={handleChange}>
          {medicalPlans.data &&
            medicalPlans.data.map((plan) => (
              <Option key={plan.codigo} value={plan.nome}>
                {plan.nome}
              </Option>
            ))}
        </Select>
      </Form.Item>
    </Container>
  );
};

export default Planos;
