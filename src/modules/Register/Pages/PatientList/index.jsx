import React, { useEffect, useState } from "react";
import { Divider, Table } from "antd";

import { Container, Content, StyledSearch } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../store/Actions/UsersActions";

const PatientList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
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
  const onSearch = (value) => {
    setSearchText(value.toLowerCase());
  };

  const filteredUsers = users.data.filter((user) =>
    user.nome.toLowerCase().includes(searchText)
  );
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <Container>
      <Content>
        <Divider />
        <StyledSearch
          placeholder="Digite o nome do paciente"
          onSearch={onSearch}
        />
        <Table dataSource={filteredUsers} columns={columns} />
      </Content>
    </Container>
  );
};

export default PatientList;
