import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMedicalPlans } from "../../store/Actions/medicalPlansActions";

const Services = () => {
  const medicalPlans = useSelector((state) => state.medicalPlans);
  const allPlans = medicalPlans.data;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMedicalPlans());
  }, []);

  return (
    <div>
      <h1>Planos</h1>
      <ul>
        {allPlans?.map((plano) => (
          <li key={plano.codigo}>
            {plano.nome} - R$ {plano.valor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
