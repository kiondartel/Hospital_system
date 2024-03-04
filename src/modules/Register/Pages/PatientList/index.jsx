import React, { useEffect, useState } from "react";
import { Button, Divider, Table } from "antd";

import { Container, Content, SearchAndButtonContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../store/Actions/UsersActions";
import HospitalRegistrationModal from "../../components/Planos/HospitalRegistrationModal";
import FilterComponent from "./Components/PatientFilter";
import { fetchMedicalPlans } from "../../../../store/Actions/medicalPlansActions";

const PatientList = () => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const medicalPlans = useSelector((state) => state.medicalPlans);
  const [filters, setFilters] = useState({
    nome: "",
    plano: "",
    genero: "",
  });
  const [pageSize, setPageSize] = useState(10);
  const users = useSelector((state) => state.users);
  const filteredUsers = users.data.filter(
    (user) =>
      user.nome.toLowerCase().includes(filters.nome) &&
      (!filters.plano || user.plano.nome === filters.plano) &&
      (!filters.genero || user.genero === filters.genero)
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

  const handleSearch = (value) => {
    setFilters({ ...filters, nome: value.toLowerCase() });
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(fetchMedicalPlans());
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Lista de Pacientes</h3>
          <Button type="primary" onClick={showModal}>
            Cadastrar Novo Paciente
          </Button>
        </div>
        <Divider />
        <SearchAndButtonContainer>
          <FilterComponent
            medicalPlans={medicalPlans.data}
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
          />
        </SearchAndButtonContainer>
        <Divider />
        <Table
          id="myTable"
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
