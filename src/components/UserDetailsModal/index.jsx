import React from "react";
import { Modal, Descriptions, Avatar } from "antd";
import users from "../../assets/image/user.png";
import formatDate from "../../modules/Utils/dateUtils";

const UserDetailsModal = ({ user, isVisible, handleClose }) => {
  return (
    <Modal
      title="Detalhes do Usuário"
      open={isVisible}
      onCancel={handleClose}
      footer={null}
      width={700}
    >
      {user ? (
        <>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 16 }}
          >
            <Avatar size={64} src={users} />
            <h2 style={{ marginLeft: 16 }}>{user.nome}</h2>
          </div>
          <Descriptions bordered column={1}>
            <Descriptions.Item label="Nome">{user.nome}</Descriptions.Item>
            <Descriptions.Item label="Genero">{user.genero}</Descriptions.Item>
            <Descriptions.Item label="Endereço">
              {user.endereco}
            </Descriptions.Item>
            <Descriptions.Item label="Plano">
              {user.plano?.nome}
              {formatDate}
            </Descriptions.Item>
            <Descriptions.Item label="Entrada no sistema">
              {formatDate(user.createdAt)}
            </Descriptions.Item>
            <Descriptions.Item label="Sintomas">
              {user.descricaoPaciente}
            </Descriptions.Item>
          </Descriptions>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </Modal>
  );
};

export default UserDetailsModal;
