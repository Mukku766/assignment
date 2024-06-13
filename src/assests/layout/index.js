import React from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

export default function HomeLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
