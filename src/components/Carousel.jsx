import React from "react";
import "./css/Carousel.css";
import items from "./assets/foods.js";
import { Link } from "react-router-dom";

function Carousel() {
  // Buttons functions
  const handleLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const handleRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const filteredItems = items.filter((item) => item.id >= 6);

  return (
    <section className="carousel-container container">
      {/* Carousel title and buttons */}
      <div className="title-btns">
        <h2>Destaques</h2>

        <div className="buttons">
          <button onClick={handleLeft} className="btn arrow-left">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button onClick={handleRight} className="btn arrow-right">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Renders items */}
      <div className="carousel" id="slider">
        {filteredItems.map((item) => {
          const { id, name, price, image } = item;

          return (
            <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}to={`/categoria/produto/${id}`}  key={id}>
              <div className="item">
                <div className="image">
                  <img src={image} alt='produto'/>
                </div>
                <div className="info">
                  <p className="name">{name}</p>
                  <p className="price">R${price}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Carousel;
