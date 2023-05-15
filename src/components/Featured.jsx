import React from "react";
import "./css/Featured.css";
import { Link } from "react-router-dom";
import brazilian from "../images/brazilian.jpg";
import bottle from "../images/bottle.webp";
import snack from "../images/snack.jpg";
import chocolate from "../images/chocolate.jpg";

function Featured() {
  return (
    <section className="featured">
      <div className="child-featured">
        <div className="featured-card first">
          <Link to="/categoria/brasileira" state={{ headerName: "brasileira" }}>
            <div className="overlay"></div>
            <img id="img1" src={brazilian} alt="brasileira"></img>
            <p>Brasileira</p>
          </Link>
        </div>

        <div className="featured-card second">
          <Link to="/categoria/bebidas" state={{ headerName: "bebidas" }}>
            <div className="overlay"></div>
            <img src={bottle} alt="bebidas"></img>
            <p>Bebidas</p>
          </Link>
        </div>

        <div className="featured-card third">
          <Link to="/categoria/salgados" state={{ headerName: "lanches" }}>
            <div className="overlay"></div>
            <img src={snack} alt="lanches"></img>
            <p>Lanches</p>
          </Link>
        </div>

        <div className="featured-card fourth">
          <Link to="/categoria/doces" state={{ headerName: "doces" }}>
            <div className="overlay"></div>
            <img src={chocolate} alt="doces"></img>
            <p>Doces</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Featured;
