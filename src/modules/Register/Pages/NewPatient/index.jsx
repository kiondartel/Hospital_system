import React from "react";
import { Form, Input, DatePicker, Select } from "antd";
import {
  SmallInputContainer,
  Info,
  ButtonsContainer,
  StyledButton,
  FormContainer,
  FormContent,
} from "./styles";
import Planos from "../../components/Planos";
import { useSelector } from "react-redux";
import { UserService } from "../../../../service/partageApi/UserService";
import {
  FaBirthdayCake,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTransgender,
} from "react-icons/fa";
import { CustomIcon } from "../../../../components/CustomIcon";

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
        <h1>Cadastro de pacientes</h1>
        <Form onFinish={onFinish}>
          <Form.Item
            name="nome"
            label={
              <>
                <CustomIcon icon={<FaUser />} /> Nome
              </>
            }
            rules={[{ required: true, message: "Por favor, insira seu nome!" }]}
          >
            <Input />
          </Form.Item>
          <Info>
            <Form.Item
              name="dataNascimento"
              label={
                <>
                  <CustomIcon icon={<FaBirthdayCake />} />
                  Data de Nascimento
                </>
              }
              rules={[
                {
                  required: true,
                  message: "Por favor, insira sua data de nascimento!",
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              name="genero"
              label={
                <>
                  <CustomIcon icon={<FaTransgender />} />
                  Genero
                </>
              }
              style={{ width: "50%" }}
              rules={[
                { required: true, message: "Por favor, selecione seu gênero!" },
              ]}
            >
              <Select>
                <Option value="masculino">Masculino</Option>
                <Option value="feminino">Feminino</Option>
                <Option value="outro">Outro</Option>
              </Select>
            </Form.Item>
          </Info>
          <Form.Item
            name="endereco"
            label={
              <>
                <CustomIcon icon={<FaMapMarkerAlt />} /> Endereço
              </>
            }
            rules={[
              { required: true, message: "Por favor, digite seu endereço!" },
            ]}
          >
            <Input />
          </Form.Item>

          <SmallInputContainer>
            <Form.Item
              name="email"
              label={
                <>
                  <CustomIcon icon={<FaEnvelope />} /> Endereço
                </>
              }
              rules={[
                { required: true, message: "Por favor, digite seu email!" },
              ]}
            >
              <Input className="smallInput" type="email" />
            </Form.Item>
            <Form.Item
              name="telefone"
              label={
                <>
                  <CustomIcon icon={<FaPhone />} /> Endereço
                </>
              }
              rules={[
                { required: true, message: "Por favor, digite seu telefone!" },
              ]}
            >
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
