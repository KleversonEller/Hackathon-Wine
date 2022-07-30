import React from "react";
import Logo from "../image/wine.svg";

const Header = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt="Logo da empresa escrito wine com letras pretas" />
      </div>
      <div>
        <h2>O maior clube de vinhos do mundo</h2>
      </div>
    </div>
  );
};

export default Header;
