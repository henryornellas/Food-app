import React from "react";
import "./css/Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="news-text">
        <h2 className="news-title">Newsletter</h2>
        <form>
          <input type="email" placeholder="seuEmail@email.com"></input>
          <button>Inscrever</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
