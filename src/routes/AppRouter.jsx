import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Cities from "./../pages/Cities";
import CityDetail from "./../pages/CityDetail";
import Login from "./../pages/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cities" element={<Cities />} />
      <Route path="/city/detail" element={<CityDetail />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
