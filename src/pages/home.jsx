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
import "../css/header.css";

const Home = () => {
  return (
    <div>
      <img src={garrafa2} alt="garrafas coloridas" className="header-img-bottle1"></img>
      <Header />
      <img src={garrafas3} alt="garrafas coloridas" className="header-img-bottle2"></img>
      <div>
        <NavBar />
      </div>
      <section>
        <Insta />
        <div></div>
        <div></div>
        <div></div>
      </section>
      <div className="container">
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
