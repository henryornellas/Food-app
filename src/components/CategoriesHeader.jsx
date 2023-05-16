import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function CategoriesHeader() {

  //Checks for passed header name from homepage
  const location = useLocation();
  function getHeaderName() {
    if(location.state){
      return location.state.headerName;
    }else{
      return 'todos';
    }
  }

  const [btnName, setBtnName] = useState(getHeaderName);
  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <section className="catego-header">
      <div className="header-part">
        <Link onClick={() => window.scrollTo(0, 0)} to="/">
          <i className="fa-solid fa-angle-left"></i> Home
        </Link>
        <h3>{btnName}</h3>
      </div>

      {/* Categories page buttons */}
      <div className="buttons-part">
        <Link to="todos">
          <button onClick={() => handleBtnName("todos")}>Todos</button>
        </Link>
        <Link to="brasileira">
          <button onClick={() => handleBtnName("brasileira")}>
            Brasileira
          </button>
        </Link>
        <Link to="japonesa">
          <button onClick={() => handleBtnName("japonesa")}>Japonesa</button>
        </Link>
        <Link to="salgados">
          <button onClick={() => handleBtnName("salgados")}>Salgados</button>
        </Link>
        <Link to="doces">
          <button onClick={() => handleBtnName("doces")}>Doces</button>
        </Link>
        <Link to="bebidas">
          <button onClick={() => handleBtnName("bebidas")}>Bebidas</button>
        </Link>
      </div>
    </section>
  );
}

export default CategoriesHeader;
