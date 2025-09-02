import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./mainpage/Header";
import Footer from "./mainpage/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This is where child pages will render */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
