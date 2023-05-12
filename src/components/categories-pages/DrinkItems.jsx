import React from "react";
import items from "../assets/foods.js";
import { Link } from "react-router-dom";

function DrinkItems() {
  const filteredItems = items.filter((item) => item.category === "drink");

  return (
    <section className="highlight-parent">
      <div className="highlights">
        {filteredItems.map((item) => {
          const { id, name, price, image } = item;

          return (
            <div className={"highlight-item"} key={id}>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={`/categoria/produto/${id}`}
              >
                <div className="highlights-images">
                  <img src={image} alt='product'/>
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

export default DrinkItems;
