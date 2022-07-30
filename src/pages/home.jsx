import React from "react";
// import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import NavBar from "../components/nav.bar";
import Produtos from "../components/prdutos";
import Insta from "../components/insta";
import Planos from "../components/planos";
import Curiosidades from "../components/curiosidades";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <NavBar />
      </div>
      <div>
        <Produtos />
      </div>
      <div>
        <Insta />
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
