import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingAiButton from "./../components/FloatingAiButton";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <FloatingAiButton />
      <Footer />
    </div>
  );
};

export default AppLayout;
