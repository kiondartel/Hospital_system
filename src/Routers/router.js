import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Services from "../page/Planos";
import Patients from "../page/Patients";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="plans" element={<Services />} />
          <Route path="pacientes" element={<Patients />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
