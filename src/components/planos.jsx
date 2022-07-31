/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from "react";
import useStore from "../store";
import { v4 as uuidv4 } from "uuid";
import { FiGift } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Planos = () => {
  const setPlans = useStore((state) => state.setPlansList);
  const navigate = useNavigate();

  useEffect(() => {
    setPlans();
  }, []);

  const plansList = useStore(useCallback((state) => state.planos, []));

  return (
    <div>
      <h3>Planos</h3>
      {plansList.map((objeto) => (
        <div key={uuidv4()}>
          <span>{objeto.name}</span>
          <br />
          <span>{objeto.promotion}</span>
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
          <button type="button" onClick={() => navigate(`/planos/${objeto.id}`)}>
            ASSINAR
          </button>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Planos;
