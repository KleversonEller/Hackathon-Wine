import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const clickNavigate = (route) => {
    return navigate(route);
  };

  return (
    <div>
      <div>
        <Link to="/clube">Clube</Link>
      </div>
      <div>
        <Link to="/loja">Loja</Link>
      </div>
      <div>
        <Link to="/produtos">Produtores</Link>
      </div>
      <div>
        <Link to="/ofertas">Ofertas</Link>
      </div>
      <div>
        <Link to="/eventos">Eventos</Link>
      </div>
      <div>
        <Link to="/app">Baixe o App</Link>
      </div>
      <div>
        <button onClick={() => clickNavigate("/perfil")}>
          <FaUserAlt />
        </button>
      </div>
      <div>
        <button onClick={() => clickNavigate("/store")}>
          <MdOutlineLocalGroceryStore />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
