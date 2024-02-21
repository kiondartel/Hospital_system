import React, { useEffect, useState } from "react";
import { Table, message } from "antd";

import { Container, SearchBar } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../store/Actions/UsersActions";

const PatientList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <Container>
      <Table dataSource={users.data} columns={columns} />
    </Container>
  );
};

export default PatientList;
