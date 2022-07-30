import React from "react";
import FormPag from "../image/form-pag.svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div>
        <img
          src={FormPag}
          alt="Ilustrações das logos das empresas de cartões de credito"
        />
      </div>
      <div>
        <a
          href="https://www.facebook.com/winevinhos/#xd_co_f=Y2RiN2VlYmQtMTJiZi00NDYyLWEyMDAtMDI5ZjAyMjdkYTJl~"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/wine_vinhos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/winevinhos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <div>
        <a
          href="https://www.youtube.com/user/WineVinhos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsYoutube />
        </a>
      </div>
    </div>
  );
};

export default Footer;
