import React from "react";
import { FiUser } from "react-icons/fi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "../css/navBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  const clickNavigate = (route) => {
    return navigate(route);
  };

  return (
    <div className="navBar-container">
      <div className="navBar-link">
        <Link to="/clube">Clube</Link>
      </div>
      <div className="navBar-link">
        <Link to="/loja">Loja</Link>
      </div>
      <div className="navBar-link">
        <Link to="/produtos">Produtores</Link>
      </div>
      <div className="navBar-link">
        <Link to="/ofertas">Ofertas</Link>
      </div>
      <div className="navBar-link">
        <Link to="/eventos">Eventos</Link>
      </div>
      <div className="navBar-link">
        <Link to="/app">Baixe o App</Link>
      </div>
      <div className="navBar-icons">
        <div>
          <FiUser onClick={() => clickNavigate("/perfil")} />
        </div>
        <div>
          <MdOutlineLocalGroceryStore onClick={() => clickNavigate("/store")} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
