import React, { useState } from "react";
import { Form, Input, DatePicker, Select } from "antd";
import {
  FormContainer,
  SmallInputContainer,
  Info,
  FormContent,
  ButtonsContainer,
  StyledButton,
} from "./styles";
import Planos from "../../components/Planos";
import { useSelector } from "react-redux";
import { UserService } from "../../../../service/partageApi/UserService";

const { Option } = Select;

const HospitalRegistrationForm = () => {
  const plan = useSelector((state) => state.plan);

  const onFinish = async (values) => {
    if (plan) {
      const formattedDate = values.dataNascimento.format("YYYY-MM-DD");

      const payload = {
        ...values,
        dataNascimento: formattedDate,
        codigoPlano: plan.selectedPlan[0].codigo,
      };

      UserService.createUser(payload)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <FormContainer>
      <FormContent>
        <Form onFinish={onFinish}>
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
          <ButtonsContainer>
            <StyledButton type="primary" htmlType="submit">
              Cadastrar
            </StyledButton>
          </ButtonsContainer>
        </Form>
      </FormContent>
    </FormContainer>
  );
};

export default HospitalRegistrationForm;
