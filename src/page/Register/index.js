import React, { useState } from "react";
import { Form, Input, DatePicker, Select, Steps } from "antd";
import {
  ButtonsContainer,
  FormContainer,
  SmallInputContainer,
  StepsContainer,
  StyledButton,
  Info,
} from "./styles";

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
            <Info>
              <Form.Item name="dataNascimento" label="Data de Nascimento">
                <DatePicker />
              </Form.Item>
              <Form.Item name="genero" label="Gênero" style={{ width: "50%" }}>
                <Select>
                  <Option value="masculino">Masculino</Option>
                  <Option value="feminino">Feminino</Option>
                  <Option value="outro">Outro</Option>
                </Select>
              </Form.Item>
            </Info>
            <Form.Item name="endereco" label="Endereço">
              <Input />
            </Form.Item>

            <SmallInputContainer>
              <Form.Item name="email" label="E-mail">
                <Input className="smallInput" type="email" />
              </Form.Item>
              <Form.Item name="telefone" label="Telefone">
                <Input className="smallInput" />
              </Form.Item>
            </SmallInputContainer>

            <ButtonsContainer>
              <StyledButton type="primary" onClick={nextStep}>
                Próximo
              </StyledButton>
            </ButtonsContainer>
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
            <ButtonsContainer>
              <StyledButton onClick={prevStep}>Anterior</StyledButton>
              <StyledButton type="primary" htmlType="submit">
                Submeter
              </StyledButton>
            </ButtonsContainer>
          </>
        )}
      </Form>
    </FormContainer>
  );
};

export default HospitalRegistrationForm;
