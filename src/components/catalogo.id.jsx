/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect } from "react";
import useStore from "../store";
import { useParams } from "react-router-dom";
import Header from "./header";
import NavBar from "./nav.bar";
import Footer from "./footer";

const CatalogoId = () => {
  const { id } = useParams();
  const setProducts = useStore((state) => state.setProductsList);
  const productsList = useStore(useCallback((state) => state.produtos, []));
  const [produto, setProduto] = useState();

  const setStateProduct = () => {
    return productsList.map((objeto) => {
      objeto.id === +id && setProduto(objeto);
    });
  };

  useEffect(() => {
    setProducts();
  }, []);

  useEffect(() => {
    setStateProduct();
  }, []);

  return (
    <div>
      <Header />
      <NavBar />
      <h1>{produto.name}</h1>
      <Footer />
    </div>
  );
};

export default CatalogoId;
