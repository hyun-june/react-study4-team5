import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cities from "./../pages/Cities";
import CityDetail from "./../pages/CityDetail";
import Login from "./../pages/Login";
import AppLayout from "../layout/AppLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/city/detail" element={<CityDetail />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
