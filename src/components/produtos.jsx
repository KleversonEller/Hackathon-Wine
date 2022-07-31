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
    <div className="products-container">
      <h3 className="products-title">Produtos</h3>
      {productsList.length !== 0 && (
        <Carousel
          sx={{ maxWidth: 600 }}
          mx="auto"
          withIndicators
          height={700}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {productsList.map((objeto) => (
            <Carousel.Slide key={uuidv4()} className="products-objects">
              <div>
                <img src={objeto.image} alt="Imagem do vinho" className="products-imag" />
              </div>
              <div className="products-container">
                <div className="products-informations">
                  <span>{objeto.name}</span>
                  <span>{objeto.type}</span>
                  <span>{objeto.country}</span>
                  <span>{objeto.sommelierComment}</span>
                </div>
                <div className="products-link">
                  <Link to={`/catalogo/${objeto.id}`}>Saiba Mais</Link>
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Produtos;
