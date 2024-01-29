import React, { useState, useEffect } from "react";
import axios from "axios";

const Services = () => {
  const [planos, setPlanos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/v1/planos")
      .then((response) => {
        setPlanos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os planos!", error);
      });
  }, []);

  return (
    <div>
      <h1>Planos</h1>
      <ul>
        {planos.map((plano) => (
          <li key={plano.codigo}>
            {plano.nome} - R$ {plano.valor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
