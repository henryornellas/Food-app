import React from "react";
import "./css/BannerReverse.css";
import { Link } from "react-router-dom";
import musksaro from "../images/musksaro.png";

function BannerReverse() {
  return (
    <section className="bannerReverse">
      <div className="img-side">
        <img src={musksaro} alt='musksaro'></img>
      </div>

      <div className="text-side">
        <div className="text">
          <h2>Peça já seu Ziba Delivery!</h2>
          <p>Seu produto entregue dentro do prazo ou seu dinheiro de volta!</p>

          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to={"/categoria/todos"}
          >
            <button>PEÇA AGORA</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BannerReverse;
