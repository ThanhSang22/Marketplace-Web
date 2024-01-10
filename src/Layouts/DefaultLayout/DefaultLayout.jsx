import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
