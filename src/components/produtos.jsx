/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { v4 as uuidv4 } from "uuid";
import useStore from "../store";
import { Link } from "react-router-dom";
import "../css/produtos.css";

const Produtos = () => {
  const setProducts = useStore((state) => state.setProductsList);
  useEffect(() => {
    setProducts();
  }, []);

  const autoplay = useRef(
    Autoplay({ delay: 4000 }, (emblaRoot) => emblaRoot.parentElement)
  );

  const productsList = useStore(useCallback((state) => state.produtos, []));

  return (
    <div className="produtos">
      {productsList.length !== 0 && (
        <Carousel
          className="container"
          withIndicators
          height={700}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {productsList.map((objeto) => (
            <Carousel.Slide key={uuidv4()} className="container-card">
              <img
                src={objeto.image}
                alt={`Ilustração da garrafa do vinho ${objeto.name}`}
              />
              <div>
                <div className="container-descrição">
                  <span>
                    <b>{objeto.name}</b>
                  </span>
                  <span>
                    <b>Tipo: </b>
                    {objeto.type}
                  </span>
                  <span>
                    <b>Origem: </b>
                    {objeto.country}
                  </span>
                  <span>
                    <b>Comentário Sommelier:</b> <br />
                    <br />
                    <i>{objeto.sommelierComment}</i>
                  </span>
                </div>
                <Link to={`/catalogo/${objeto.id}`} className="container-link">
                  Saiba Mais
                </Link>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Produtos;
