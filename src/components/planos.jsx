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
      <h3 className="plan-title">PLANOS</h3>
      <div className="plan-objects">
        <img src={wineBottle} alt="Imagem garrafa de vidro" />
        <div className="plan-card">
          {plansList.map((objeto) => (
            <div className="plan-card-promotion" key={uuidv4()}>
              <span>{objeto.name}</span>
              <span>{objeto.promotion}</span>
              <span>
                R$ <s>{objeto.price}</s> por
              </span>
              <span>R$ {objeto.priceWithDiscount} /mês</span>
              {objeto.gift && (
                <span>
                  <FiGift />
                  {objeto.gift}
                </span>
              )}
              <button
                className="plan-btn"
                type="button"
                onClick={() => navigate(`/planos/${objeto.id}`)}
              >
                ASSINAR
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planos;
