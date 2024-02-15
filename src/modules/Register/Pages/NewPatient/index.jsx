import React, { useState } from "react";
import { Form, Input, DatePicker, Select } from "antd";
import {
  FormContainer,
  SmallInputContainer,
  Info,
  FormContent,
} from "./styles";
import Planos from "../../components/Planos";
import { useSelector } from "react-redux";

const { Option } = Select;

const HospitalRegistrationForm = () => {
  const plan = useSelector((state) => state.plan);
  console.log(plan.selectedPlan[0].codigo, "cu");
  const handleSubmit = (values) => {
    values.codigoPlano = plan.selectedPlan[0].codigo;
    console.log("Form Data:", values);
  };

  return (
    <FormContainer>
      <FormContent>
        <Form onFinish={handleSubmit}>
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
          <Planos />
        </Form>
      </FormContent>
    </FormContainer>
  );
};

export default HospitalRegistrationForm;
