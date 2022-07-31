import React from "react";
import { FiUser } from "react-icons/fi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { osName } from "mobile-device-detect";
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
        {osName === "Android" && (
          <a
            href="https://play.google.com/store/apps/details?id=br.com.wine.app&hl=pt"
            target="_blank"
            rel="noreferrer"
          >
            Baixe o App
          </a>
        )}
        {osName === "iOS" && (
          <a
            href="https://apps.apple.com/br/app/wine-loja-e-clube-de-vinhos/id1411629873"
            target="_blank"
            rel="noreferrer"
          >
            Baixe o App
          </a>
        )}
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
