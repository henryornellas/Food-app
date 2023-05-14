import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Newsletter from "./Newsletter.jsx";
import Footer from "./Footer.jsx";
import All from "./categories-pages/All.jsx";
import Brazilian from "./categories-pages/Brazilian.jsx";
import Japanese from "./categories-pages/Japanese.jsx";
import Snacks from "./categories-pages/Snacks.jsx";
import Candies from "./categories-pages/Candies.jsx";
import Drinks from "./categories-pages/Drinks.jsx";
import { CartContext } from "../routes/ProductPage.jsx";
import ProductPage from "../routes/ProductPage.jsx";
import Categories from "../routes/CategoriesPage.jsx";
import Home from "../routes/Home.jsx";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {

    setCartItem([item]);

    cartItem.forEach((foundItem) => {
      if(foundItem[0].id === item[0].id){
        setCartItem([...cartItem])
      }else{
        setCartItem([item]);
      }
    });
  };

  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
    if (savedCart) {
      setCartItem(savedCart);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItem, addToCart, setCartItem }}>
      <Header />

      <Routes>
        <Route exact path="ziba-delivery" element={<Home />} />

        <Route path="categoria" element={<Categories />}>
          <Route path="todos" element={<All />} />
          <Route path="brasileira" element={<Brazilian />} />
          <Route path="japonesa" element={<Japanese />} />
          <Route path="salgados" element={<Snacks />} />
          <Route path="doces" element={<Candies />} />
          <Route path="bebidas" element={<Drinks />} />
        </Route>

        <Route path="categoria/produto/:id" element={<ProductPage />} />
      </Routes>

      <Newsletter />
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
