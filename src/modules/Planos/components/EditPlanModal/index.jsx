import React, { useState } from "react";
import { Modal, Input, Form } from "antd";

const EditPlanModal = ({ isOpen, onOk, onCancel, plano }) => {
  const [nome, setNome] = useState(plano.nome);
  const [procedimentos, setProcedimentos] = useState(plano.procedimentos || "");

  const handleOk = () => {
    onOk(plano.codigo, { nome, procedimentos });
  };

  return (
    <Modal
      title="Editar Plano"
      open={isOpen}
      onOk={handleOk}
      onCancel={onCancel}
    >
      <Form>
        <Form.Item label="Nome do Plano">
          <Input value={nome} onChange={(e) => setNome(e.target.value)} />
        </Form.Item>
        <Form.Item label="Procedimentos">
          <Input.TextArea
            value={procedimentos}
            onChange={(e) => setProcedimentos(e.target.value)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditPlanModal;
