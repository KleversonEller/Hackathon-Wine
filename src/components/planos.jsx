/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from "react";
import useStore from "../store";
import { v4 as uuidv4 } from "uuid";
import { FiGift } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import wineBottle from "../image/wineBottle.png";
import "../css/planos.css";

const Planos = () => {
  const setPlans = useStore((state) => state.setPlansList);
  const navigate = useNavigate();

  useEffect(() => {
    setPlans();
  }, []);

  const plansList = useStore(useCallback((state) => state.planos, []));

  return (
    <div className="plan-container">
      <h3 className="plan-title">Planos</h3>
      <div className="plan-objects">
        <img src={wineBottle} alt="Imagem garrafa de vidro" className="plan-image" />
        {plansList.map((objeto) => (
          <div className="plan-card-promotion" key={uuidv4()}>
            <span className="plan-card-name">{objeto.name}</span>
            <br />
            <br />
            <span className="plan-card-promotion-price">{objeto.promotion}</span>
            <br />
            <span>
              R$ <s>{objeto.price}</s> por
            </span>
            <br />
            <span>R$ {objeto.priceWithDiscount} /mês</span>
            <br />
            {objeto.gift && (
              <span>
                <FiGift />
                {objeto.gift}
              </span>
            )}
            <br />
            <button
              className="plan-btn"
              type="button"
              onClick={() => navigate(`/planos/${objeto.id}`)}
            >
              ASSINAR
            </button>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planos;
