import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import logo from "../images/logo.png";
import EmptyCart from "./EmptyCart.jsx";
import CartWithItems from "./CartWithItems.jsx";
import { CartContext } from "../routes/ProductPage.jsx";

function Header() {
  const [small, setSmall] = useState(false);
  const [cart, setCart] = useState(false);
  const { cartItem } = useContext(CartContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 60)
      );
    }
  }, []);

  const openCart = () => {
    setCart(!cart);
  };

  return (
    <header className={`header ${small ? "small" : ""}`}>
      {/* Cart Overlay */}
      <div
        onClick={openCart}
        className={`page-overlay ${cart ? "open-flex" : "closed-flex"}`}
      ></div>

      {/* Open Cart */}
      <div className={`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
        <div className="cart-title-btn">
          <h2 className="cart-full-h2">Sua cesta ({cartItem.length})</h2>
          <i onClick={openCart} className="fa-sharp fa-solid fa-xmark"></i>
        </div>

        <div className="cart-body">
          {cartItem.length < 1 ? (
            <EmptyCart openCart={openCart} />
          ) : (
            <CartWithItems />
          )}
        </div>
      </div>

      {/* Header */}
      <div className="header-container">
        <Link onClick={() => window.scrollTo(0, 0)} to="ziba-delivery">
          <div className="brand">
            <img src={logo} alt="logo" />
            <h1>Ziba Delivery</h1>
          </div>
        </Link>

        <div className="nav-links">
          <Link onClick={() => window.scrollTo(0, 0)} to="/categoria/todos">
            Categorias
          </Link>
          <Link onClick={() => window.scrollTo(0, 0)} to="/categoria/produto/2">
            Produto
          </Link>
          <i
            data-array-length={cartItem.length}
            onClick={openCart}
            className={`fa-solid fa-cart-shopping ${cartItem.length < 1 ? "cart-icon" : "cart-icon with-items"}`}
          ></i>
        </div>

        <div className="hamburger-menu">
          <i className="fa-solid fa-cart-shopping hamburger-cart cart-icon"></i>
          <i className="fa-solid fa-bars hamburger-hamb"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
