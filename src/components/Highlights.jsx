import React from "react";
import "./css/Highlights.css";
import items from "./assets/foods.js";
import { Link } from "react-router-dom";

function Highlights() {
  // Only first 8 items
  const filteredItems = items.filter((item) => item.id <= 8);

  return (
    <section className="highlight-parent">
      <h2 className="highlight-h2">Mais pedidos</h2>

      <div className="highlights">
        {filteredItems.map((item) => {
          const { id, name, price, image } = item;

          return (
            <div className={"highlight-item"} key={id}>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}to={`/categoria/produto/${id}`}>
                <div className="highlights-images">
                  <img src={image} alt='produto'/>
                </div>

                <div className="info">
                  <p className="name">{name}</p>
                  <p className="price">R${price}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Highlights;
