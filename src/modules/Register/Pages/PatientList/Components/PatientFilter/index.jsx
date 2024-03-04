import React, { useState } from "react";
import { Input, Select } from "antd";
import { Container, InputContainer, Label } from "./styles";

const { Search } = Input;
const { Option } = Select;

const FilterComponent = ({ medicalPlans, onSearch, onFilterChange }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleSearch = (value) => {
    setSearchText(value);
    onSearch(value);
  };

  const handlePlanChange = (value) => {
    setSelectedPlan(value);
    onFilterChange("plano", value);
  };

  return (
    <Container>
      <InputContainer>
        <Label htmlFor="searchInput">Nome</Label>
        <Search
          placeholder="Digite o nome do paciente"
          onSearch={handleSearch}
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="selectPlan">Planos</Label>
        <Select
          placeholder="Selecione o plano"
          onChange={handlePlanChange}
          closeMenuOnSelect={false}
          allowClear
        >
          {medicalPlans &&
            medicalPlans.map((plano) => (
              <Option key={plano.codigo} value={plano.nome}>
                {plano.nome}
              </Option>
            ))}
        </Select>
      </InputContainer>
    </Container>
  );
};

export default FilterComponent;
