import React from "react";
import EmptyCartImg from "../images/empty-cart.png";

function EmptyCart({ openCart }) {
  return (
    <div className="empty-cart">
      <img src={EmptyCartImg} alt="cesta vazia" />
      <p>Cesta vazia..</p>
      <button onClick={openCart}>Continuar comprando</button>
    </div>
  );
}

export default EmptyCart;
