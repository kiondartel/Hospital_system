import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";
import Services from "../modules/Planos";
import Patients from "../modules/Patients";
import HospitalRegistrationForm from "../modules/Register/Pages/NewPatient";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HospitalRegistrationForm />} />
          <Route path="plans" element={<Services />} />
          <Route path="pacientes" element={<Patients />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
