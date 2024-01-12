import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Layout from "../components/Layout";
import Services from "../page/Planos";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="plans" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
