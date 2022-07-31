import React from "react";
import Logo from "../image/wine.svg";
import garrafa4 from "../image/garrafa4.jpeg";
import garrafa2 from "../image/garrafa2.png";
import "../css/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img src={garrafa2} alt="garrafas coloridas" className="header-img-bottle1"></img>
      <img
        src={Logo}
        alt="Logo da empresa escrito wine com letras pretas"
        className="header-img-logo"
      />
      <h2 className="header-title">O maior clube de vinhos do mundo</h2>
      <img src={garrafa4} alt="garrafas coloridas" className="header-img-bottle2" />
    </div>
  );
};

export default Header;
