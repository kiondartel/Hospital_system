import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";
import PlansManagement from "../modules/Planos/Page/PlanManagement/index";
import PatientList from "../modules/Register/Pages/PatientList";
import HospitalDashboard from "../modules/DashBoard/Index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HospitalDashboard />} />
          <Route path="patient/list" element={<PatientList />} />
          <Route path="plans" element={<PlansManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
