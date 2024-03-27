import React, { useEffect, useState } from "react";
import { Button, Divider, Table } from "antd";

import { Container, Content, SearchAndButtonContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../store/Actions/UsersActions";
import FilterComponent from "./Components/PatientFilter";
import { fetchMedicalPlans } from "../../../../store/Actions/medicalPlansActions";
import HospitalRegistrationModal from "../../components/HospitalRegistrationModal";
import formatDate from "../../../Utils/dateUtils";
import UserDetailsModal from "../../../../components/UserDetailsModal";

const PatientList = () => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isProntuarioVisible, setProntuarioVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const medicalPlans = useSelector((state) => state.medicalPlans);
  const [filters, setFilters] = useState({
    nome: "",
    plano: "",
    genero: "",
    dataInicio: null,
    dataFim: null,
  });
  const [pageSize, setPageSize] = useState(10);
  const users = useSelector((state) => state.users);
  const filteredUsers = users.data.filter((user) => {
    const createdAt = new Date(user.createdAt);
    const dataInicio = filters.dataInicio ? new Date(filters.dataInicio) : null;
    const dataFim = filters.dataFim ? new Date(filters.dataFim) : null;

    return (
      user.nome.toLowerCase().includes(filters.nome) &&
      (!filters.plano || user.plano.nome === filters.plano) &&
      (!filters.genero || user.genero === filters.genero) &&
      (!dataInicio || createdAt >= dataInicio) &&
      (!dataFim || createdAt <= dataFim)
    );
  });
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
        <Button
          type="primary"
          style={{ backgroundColor: "#847cd6" }}
          onClick={() => showUserDetails(record)}
        >
          Ver Prontuário
        </Button>
      ),
    },
  ];

  const handleSearch = (value) => {
    setFilters({ ...filters, nome: value.toLowerCase() });
  };
  const showUserDetails = (user) => {
    setSelectedUser(user);
    setProntuarioVisible(true);
  };

  const handleModalClose = () => {
    setProntuarioVisible(false);
  };
  const handleFilterChange = (key, value) => {
    if (key === "datas") {
      const [dataInicio, dataFim] = value;
      setFilters({ ...filters, dataInicio, dataFim });
    } else {
      setFilters({ ...filters, [key]: value });
    }
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
      <UserDetailsModal
        user={selectedUser}
        isVisible={isProntuarioVisible}
        handleClose={handleModalClose}
      />
      <Content>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3> Pacientes</h3>
          <Button
            type="primary"
            onClick={showModal}
            style={{ backgroundColor: "#847cd6" }}
          >
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
