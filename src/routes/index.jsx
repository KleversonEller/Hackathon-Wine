import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/home";
import Catalogo from "../pages/catalago";
import CatalogoId from "../components/catalogo.id";
import NotFound from "../pages/notfound";
import Store from "../pages/store";
import Perfil from "../pages/perfil";
import Loja from "../pages/loja";
import Clube from "../pages/clube";
import AppWine from "../pages/appWine";
import Eventos from "../pages/eventos";
import Ofertas from "../pages/ofertas";
import PlanosId from "../pages/planos.id";

const IndexRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Catalogo />} />
      <Route path="/catalogo/:id" element={<CatalogoId />} />
      <Route path="/store" element={<Store />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/clube" element={<Clube />} />
      <Route path="/loja" element={<Loja />} />
      <Route path="/app" element={<AppWine />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/ofertas" element={<Ofertas />} />
      <Route path="/planos/:id" element={<PlanosId />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default IndexRouter;
