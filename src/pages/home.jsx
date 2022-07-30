import React from "react";
// import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import NavBar from "../components/nav.bar";
import Produtos from "../components/produtos";
import Insta from "../components/insta";
import Planos from "../components/planos";
import Curiosidades from "../components/curiosidades";
import Footer from "../components/footer";
import garrafas3 from "../image/garrafas3.jpeg";
import garrafa2 from "../image/garrafa2.png";
import logoWine from "../image/logoWine.png";
import { MdPermIdentity } from "@react-icons/all-files/md/MdPermIdentity";
import { BiCart } from "@react-icons/all-files/bi/BiCart";
import "../css/header.css";

const Home = () => {
  return (
    <div>
      <Header />
      <header className="header-container">
        <img src={garrafa2} alt="garrafas coloridas" className="header-img-bottle1"></img>
        <img src={logoWine} alt="imagem logo wine" className="header-img-logo"></img>
        <h1>O maior clube de vinhos do mundo</h1>
        <img
          src={garrafas3}
          alt="garrafas coloridas"
          className="header-img-bottle2"
        ></img>
      </header>
      <div>
        <NavBar />
        <h3>Clube</h3>
        <h3>Loja</h3>
        <h3>Produtores</h3>
        <h3>Ofertas</h3>
        <h3>Eventos</h3>
        <h3>Baixe o APP</h3>
        <h3>
          <MdPermIdentity />
        </h3>
        <h3>
          <BiCart />
        </h3>
      </div>
      <section>
        <Insta />
        <div></div>
        <div></div>
        <div></div>
      </section>
      <div>
        <Produtos />
      </div>
      <div>
        <Planos />
      </div>
      <div>
        <Curiosidades />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
