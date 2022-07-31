import React from "react";
import imgCuriosidade from "../image/img-curiosidade.png";
// import { useNavigate } from "react-router-dom";
import "../css/curiosidades.css";

const Curiosidades = () => {
  return (
    <div className="curiosity-container">
      <h3>CURIOSIDADES</h3>
      <div className="curiosity-card">
        <img
          src={imgCuriosidade}
          alt="Pessoas vendadas em frente de uma mesa com taças de vinho segurando uma taça proxima ao nariz apreciando o aroma do vinho"
          className="curiosity-img"
        />
        <div className="curiosity-span">
          <span>
            Você sabia que degustar uma taça de vinho diariamente pode ser benéfico para a
            sua saúde?
            <br />
            Existem várias pesquisas sobre o efeito da bebida no organismo. As principais
            vantagens incluem diminuição do risco de doenças cardíacas, prevenção de
            diabetes, Alzheimer e outras doenças neurológicas.
            <br />
            Afinal, o vinho tem um efeito anti envelhecimento. O resveratrol, por exemplo,
            é uma substância encontrada nos vinhos que tem propriedades antioxidantes.
            <br />
            Nada mal, né? Dá para degustar com moderação sem culpa!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Curiosidades;
