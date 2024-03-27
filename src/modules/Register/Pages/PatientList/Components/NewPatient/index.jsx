import React from "react";
import { Form, Input, DatePicker, Select, notification } from "antd";
import { Info, ButtonsContainer, StyledButton } from "./styles";
import Planos from "../../../../components/Planos";
import { useSelector } from "react-redux";
import { UserService } from "../../../../../../service/partageApi/UserService";
import {
  FaBirthdayCake,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTransgender,
  FaNotesMedical,
} from "react-icons/fa";
import { CustomIcon } from "../../../../../../components/CustomIcon";

const { Option } = Select;

const HospitalRegistrationForm = () => {
  const [form] = Form.useForm();
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
          notification.open({
            message: "Usuário Criado",
            type: "success",
          });
          form.resetFields();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
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
          name="telefone"
          label={
            <>
              <CustomIcon icon={<FaPhone />} /> Telefone
            </>
          }
          rules={[
            { required: true, message: "Por favor, digite seu telefone!" },
          ]}
        >
          <Input className="smallInput" />
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
        rules={[{ required: true, message: "Por favor, digite seu endereço!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label={
          <>
            <CustomIcon icon={<FaEnvelope />} /> Email
          </>
        }
        rules={[{ required: true, message: "Por favor, digite seu email!" }]}
      >
        <Input className="smallInput" type="email" />
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
      </Info>

      <Planos />
      <p>
        {" "}
        <CustomIcon icon={<FaNotesMedical />} /> Sintomas
      </p>
      <Form.Item
        name="descricaoPaciente"
        rules={[
          { required: true, message: "Por favor, descreva os sintomas!" },
        ]}
      >
        <Input.TextArea
          rows={4}
          placeholder="Descreva o estado atual do paciente"
        />
      </Form.Item>
      <ButtonsContainer>
        <StyledButton
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: "#847cd6" }}
        >
          Cadastrar
        </StyledButton>
      </ButtonsContainer>
    </Form>
  );
};

export default HospitalRegistrationForm;
