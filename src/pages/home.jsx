import React from "react";
// import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import NavBar from "../components/nav.bar";
import Produtos from "../components/produtos";
import Insta from "../components/insta";
import Planos from "../components/planos";
import Curiosidades from "../components/curiosidades";
import Footer from "../components/footer";
import "../css/header.css";

const Home = () => {
  return (
    <div>
      <Header />
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
