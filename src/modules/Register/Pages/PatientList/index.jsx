import React, { useEffect, useState } from "react";
import { Button, Divider, Table } from "antd";

import {
  Container,
  Content,
  SearchAndButtonContainer,
  StyledSearch,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../store/Actions/UsersActions";
import HospitalRegistrationModal from "../../components/Planos/HospitalRegistrationModal";

const PatientList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
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
  const onSearch = (value) => {
    setSearchText(value.toLowerCase());
  };

  const filteredUsers = users.data.filter((user) =>
    user.nome.toLowerCase().includes(searchText)
  );
  const showModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <Container>
      <Content>
        <SearchAndButtonContainer>
          <StyledSearch
            placeholder="Digite o nome do paciente"
            onSearch={onSearch}
          />
          <Button type="primary" onClick={showModal}>
            Cadastrar Novo Paciente
          </Button>
        </SearchAndButtonContainer>
        <Divider />
        <Table dataSource={filteredUsers} columns={columns} />
        <HospitalRegistrationModal open={isModalVisible} onClose={closeModal} />
      </Content>
    </Container>
  );
};

export default PatientList;
