import React, { useEffect, useState } from "react";
import { Button, Table, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../store/Actions/UsersActions";
import { Container } from "./styles.js";
import UserDetailsModal from "../../../../components/UserDetailsModal/index.jsx";
import formatDate from "../../../Utils/dateUtils.js";

const LatestUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const sortedUsers = [...users.data].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const showUserDetails = (user) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Genero",
      dataIndex: "genero",
      key: "genero",
    },
    {
      title: "Endereço",
      dataIndex: "endereco",
      key: "endereco",
    },
    {
      title: "Plano",
      dataIndex: "plano",
      key: "plano.nome",
      render: (plano) => plano?.nome,
    },
    {
      title: "Data da entrada",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => formatDate(createdAt),
    },
    {
      title: "Prontuario",
      key: "nome",
      render: (text, record) => (
        <Button type="primary" onClick={() => showUserDetails(record)}>
          Ver Prontuário
        </Button>
      ),
    },
  ];

  return (
    <Container>
      <Typography.Title level={5}>
        Últimos Usuários Cadastrados
      </Typography.Title>
      <Table
        dataSource={sortedUsers}
        columns={columns}
        pagination={{ pageSize: 5 }}
      />
      <UserDetailsModal
        user={selectedUser}
        isVisible={isModalVisible}
        handleClose={handleModalClose}
      />
    </Container>
  );
};

export default LatestUsers;
