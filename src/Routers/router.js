import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// Importação lazy dos componentes
const Layout = lazy(() => import("../components/Layout"));
const PlansManagement = lazy(() =>
  import("../modules/Planos/Page/PlanManagement/index")
);
const PatientList = lazy(() => import("../modules/Register/Pages/PatientList"));
const HospitalDashboard = lazy(() => import("../modules/DashBoard/Index"));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Carregando...</div>}>
                <HospitalDashboard />
              </Suspense>
            }
          />
          <Route
            path="patient/list"
            element={
              <Suspense fallback={<div>Carregando...</div>}>
                <PatientList />
              </Suspense>
            }
          />
          <Route
            path="plans"
            element={
              <Suspense fallback={<div>Carregando...</div>}>
                <PlansManagement />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
