import React, { useEffect } from "react";
import { Table, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../store/Actions/UsersActions";
import { Container } from "./styles.js";

const LatestUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const sortedUsers = [...users.data].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
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
    </Container>
  );
};

export default LatestUsers;
