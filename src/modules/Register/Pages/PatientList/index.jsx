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
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const users = useSelector((state) => state.users);
  const filteredUsers = users.data.filter((user) =>
    user.nome.toLowerCase().includes(searchText)
  );
  const showModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

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

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const availableHeight =
        window.innerHeight -
        document.getElementById("myTable").getBoundingClientRect().top;
      const rowHeight = 50;
      const visibleRows = Math.floor(availableHeight / rowHeight);
      setPageSize(visibleRows);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
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
        <Table
          id="myTable" // Make sure to give your table an id or use another method to reference it
          dataSource={filteredUsers}
          columns={columns}
          pagination={{ pageSize: pageSize }}
        />
        <HospitalRegistrationModal open={isModalVisible} onClose={closeModal} />
      </Content>
    </Container>
  );
};

export default PatientList;
