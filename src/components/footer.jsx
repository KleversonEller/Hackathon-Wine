import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import garrafa5 from "../image/garrafa5.jpeg";
import garrafa4 from "../image/garrafa4.jpeg";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <img className="footer-image-bottle" src={garrafa4} alt="Garrafas coloridas" />
      <div className="footer-itens">
        <div className="footer-socialMediaIcons">
          <div className="footer-mediaIcons">
            <a
              href="https://www.facebook.com/winevinhos/#xd_co_f=Y2RiN2VlYmQtMTJiZi00NDYyLWEyMDAtMDI5ZjAyMjdkYTJl~"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
          <div className="footer-mediaIcons">
            <a
              href="https://twitter.com/wine_vinhos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter />
            </a>
          </div>
          <div className="footer-mediaIcons">
            <a
              href="https://www.instagram.com/winevinhos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="footer-mediaIcons">
            <a
              href="https://www.youtube.com/user/WineVinhos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube />
            </a>
          </div>
        </div>
        <p>
          SE BEBER, NÃO DIRIJA. APRECIE COM MODERAÇÃO. A VENDA DE BEBIDAS ALCOÓLICAS É
          PROIBIDA PARA MENORES DE 18 ANOS.
        </p>
      </div>
      <img className="footer-image-bottle" src={garrafa5} alt="Garrafas coloridas" />
    </div>
  );
};

export default Footer;
