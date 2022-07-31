/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { v4 as uuidv4 } from "uuid";
import useStore from "../store";
import { Link } from "react-router-dom";

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
    <div>
      <h3>Produtos</h3>
      {productsList.length !== 0 && (
        <Carousel
          sx={{ maxWidth: 600 }}
          mx="auto"
          withIndicators
          height={500}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {productsList.map((objeto) => (
            <Carousel.Slide key={uuidv4()}>
              <div>
                <img src={objeto.image} alt="" />
              </div>
              <div>
                <div>
                  <span>{objeto.name}</span>
                  <span>{objeto.type}</span>
                  <span>{objeto.country}</span>
                  <span>{objeto.sommelierComment}</span>
                </div>
                <div>
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
