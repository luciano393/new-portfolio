import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { About } from "../pages/About";
import { Main } from "../pages/Main";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
