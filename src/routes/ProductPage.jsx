import React, { createContext, useContext, useState } from "react";
import { useParams } from "react-router";
import "../components/css/ProductPage.css";
import items from "../components/assets/foods.js";
import Carousel from "../components/Carousel.jsx";

export const CartContext = createContext();

function ProductPage() {
  //Gets item id depending on the url
  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));
  const { name, image, description, price, restaurant, size, serves } = item[0];

  const { addToCart } = useContext(CartContext);

  //Plus and minus operation
  const [count, setCount] = useState(1);

  function plus() {
    if (count >= 1) {
      setCount(count + 1);
    }
  }

  function minus() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function calcPrice(count) {
    const rounded = count * price;
    return rounded.toFixed(2);
  }

  const [notify, setNotify] = useState(false);

  const showNotify = () => {
    setNotify(!notify);
  };

  return (
    <section className="product-container">
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? "slide-in" : ""}`}>
        <p>Item adicionado a cesta &nbsp; ✅</p>
      </div>

      <div className="product-title">
        <h3>{name}</h3>
      </div>

      <div className="product-box">
        <div className="product-image-side">
          <img src={image} alt='produto'></img>
        </div>

        <div className="product-about-side">
          <div className="product-text">
            <p className="main-description">{description}</p>

            <div className="product-quant">
              <p>Quantidade</p>
              <div className="product-btns">
                <button onClick={minus}>-</button>
                <p className="quantity">{count}</p>
                <button onClick={plus}>+</button>
              </div>
              <p className="product-price">R$ {calcPrice(count)}</p>
            </div>
            <div className="addOrBuy">
              <button
                onClick={() => {
                  addToCart(item);
                  showNotify();
                }}
                className="atc-btn"
              >
                Adicionar a cesta
              </button>
              <button className="buyBtn">Pedir agora</button>
            </div>
          </div>
        </div>
      </div>

      <div className="specifications">
        <div className="spec">
          <p className="spec-title">Restaurante:</p>
          <p className="title-desc">{restaurant}</p>
        </div>
        <div className="spec">
          <p className="spec-title">Tamanho:</p>
          <p className="title-desc">{size}</p>
        </div>
        <div className="spec">
          <p className="spec-title">Serve:</p>
          <p className="title-desc">{serves}</p>
        </div>
      </div>
      <Carousel />
    </section>
  );
}

export default ProductPage;
