import React from "react";
import "./css/Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="banner">
      <div className="text-side">
        <div className="text">
          <h2>Peça já seu Ziba Delivery!</h2>
          <p>
            Os melhores restaurantes da sua cidade selecionados especialmente
            para você!
          </p>

          <Link onClick={() => window.scrollTo(0, 0)} to="/categoria/todos">
            <button>PEÇA AGORA</button>
          </Link>
        </div>
      </div>

      <div className="img-side"></div>
    </section>
  );
}

export default Banner;
