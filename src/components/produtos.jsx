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
      <h3>Produtos</h3>
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
                  <span>{objeto.name}</span>
                  <span>{objeto.type}</span>
                  <span>{objeto.country}</span>
                  <span>{objeto.sommelierComment}</span>
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
