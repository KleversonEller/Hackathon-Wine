import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/home";
import Catalogo from "../pages/catalago";
import CatalogoId from "../components/catalogo.id";

const IndexRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/catalogo/:id" element={<CatalogoId />} />
    </Routes>
  );
};

export default IndexRouter;
