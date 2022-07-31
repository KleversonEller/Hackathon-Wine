import React from "react";
// import { useNavigate } from "react-router-dom";
// import InstagramMock from "../components/InstagramMock";
import Header from "../components/header";
import NavBar from "../components/nav.bar";
import Produtos from "../components/produtos";
import Insta from "../components/insta";
import Planos from "../components/planos";
import Curiosidades from "../components/curiosidades";
import Footer from "../components/footer";
import "../css/home.css";

const Home = () => {
  return (
    <div>
      {/* <InstagramMock /> */}
      <Header />
      <div>
        <NavBar />
      </div>
      <div className="container-home">
        <div>
          <Insta />
        </div>
        <div>
          <Planos />
        </div>
        <div>
          <Produtos />
        </div>
        <div>
          <Curiosidades />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
