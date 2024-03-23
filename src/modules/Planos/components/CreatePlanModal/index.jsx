import React from "react";
import { Modal, Form, Input, InputNumber, Button } from "antd";
import TextArea from "antd/es/input/TextArea";

const CreatePlanModal = ({ isOpen, onOk, onCancel }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onOk(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title="Adicionar Novo Plano"
      open={isOpen}
      onOk={handleSubmit}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancelar
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Criar Plano
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="nome"
          label="Nome do Plano"
          rules={[
            { required: true, message: "Por favor, insira o nome do plano!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="procedimentos"
          label="Procedimentos com cobertura"
          rules={[
            { required: true, message: "Por favor, insira os rocedimentos!" },
          ]}
        >
          <TextArea />
        </Form.Item>
        <Form.Item
          name="valor"
          label="Valor"
          rules={[
            { required: true, message: "Por favor, insira o valor do plano!" },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreatePlanModal;
