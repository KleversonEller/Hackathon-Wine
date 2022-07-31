import React from "react";
import { FaUserAlt } from "react-icons/fa";
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
      <div className="nav-club">
        <Link to="/clube">Clube</Link>
      </div>
      <div className="nav-store">
        <Link to="/loja">Loja</Link>
      </div>
      <div className="nav-products">
        <Link to="/produtos">Produtores</Link>
      </div>
      <div className="nav-sale">
        <Link to="/ofertas">Ofertas</Link>
      </div>
      <div className="nav-event">
        <Link to="/eventos">Eventos</Link>
      </div>
      <div className="nav-downloadApp">
        <Link to="/app">Baixe o App</Link>
      </div>
      <div className="nav-profileIcon">
        <button onClick={() => clickNavigate("/perfil")}>
          <FaUserAlt />
        </button>
      </div>
      <div className="nav-nav-storeIcon">
        <button
          className="outline outline-offset-2 outline-1"
          onClick={() => clickNavigate("/store")}
        >
          <MdOutlineLocalGroceryStore />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
