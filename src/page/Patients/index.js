import React, { useState, useEffect } from "react";
import axios from "axios";

const Patients = () => {
  const [planos, setPlanos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/pacientes")
      .then((response) => {
        setPlanos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os pacientes!", error);
      });
  }, []);

  return (
    <div>
      <h1>Pacientes</h1>
      <ul>
        {planos.map((pacientes) => (
          <li key={pacientes.id}>{pacientes.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;
