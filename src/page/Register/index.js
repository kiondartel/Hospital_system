import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Select, Steps } from "antd";
import { FormContainer, StepsContainer, StyledButton } from "./styles";

const { Step } = Steps;
const { Option } = Select;

const HospitalRegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleSubmit = (values) => {
    console.log("Form Data:", values);
    // Submeter para o backend
  };

  return (
    <FormContainer>
      <Form onFinish={handleSubmit}>
        <StepsContainer>
          <Steps current={currentStep}>
            <Step title="Dados do Usuário" />
            <Step title="Escolha do Plano" />
          </Steps>
        </StepsContainer>

        {currentStep === 0 && (
          <>
            <Form.Item name="nome" label="Nome">
              <Input />
            </Form.Item>
            <Form.Item name="dataNascimento" label="Data de Nascimento">
              <DatePicker />
            </Form.Item>
            <Form.Item name="endereco" label="Endereço">
              <Input />
            </Form.Item>
            <Form.Item name="email" label="E-mail">
              <Input type="email" />
            </Form.Item>
            <Form.Item name="telefone" label="Telefone">
              <Input />
            </Form.Item>
            <Form.Item name="genero" label="Gênero">
              <Select>
                <Option value="masculino">Masculino</Option>
                <Option value="feminino">Feminino</Option>
                <Option value="outro">Outro</Option>
              </Select>
            </Form.Item>

            <StyledButton type="primary" onClick={nextStep}>
              Próximo
            </StyledButton>
          </>
        )}

        {currentStep === 1 && (
          <>
            <Form.Item name="plano" label="Plano">
              <Select>
                <Option value="plano1">Plano 1</Option>
                <Option value="plano2">Plano 2</Option>
              </Select>
            </Form.Item>
            <StyledButton onClick={prevStep}>Anterior</StyledButton>
            <StyledButton type="primary" htmlType="submit">
              Submeter
            </StyledButton>
          </>
        )}
      </Form>
    </FormContainer>
  );
};

export default HospitalRegistrationForm;
