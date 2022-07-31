import React from "react";
import notFound from "../image/not-found.jpg";
import "../css/notFound.css";

const NotFound = () => {
  return (
    <div className="container-not-found">
      <h1>Pagina não encontrada</h1>
      <img
        src={notFound}
        alt="Imagem de uma garrafa de vinho caída em um chão de madeira ao lado de uma taça quebrada"
        srcSet=""
      />
    </div>
  );
};

export default NotFound;
