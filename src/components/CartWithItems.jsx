import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../routes/ProductPage.jsx";
import EmptyCart from "./EmptyCart";

function CartWithItems() {
  const { cartItem, setCartItem } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const newTotalPrice = cartItem.reduce(
      (acc, item) => acc + item[0].price,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItem]);

  const showPrice = () => {
    if(totalPrice * count === 0){
      return(totalPrice);
    }else{
      return(totalPrice * count);
    }
  }

  return (
    <>
      <div className="full-cart-div">
        <div className="full-cart">
          {cartItem.map((item, id) =>
            cartItem.length !== 0 ? (
              <CartItem key={id} item={item} setCartItem={setCartItem} setCount={setCount} />
            ) : (
              <EmptyCart key={id} />
            )
          )}
        </div>
      </div>
      <div className="subtotal-div">
        <div className="sub-right">
          <p>Subtotal</p>
          <p className="total-price">{"R$" + showPrice()}</p>
        </div>
        <div className="sub-left">
          <Link>Confirmar</Link>
        </div>
      </div>
    </>
  );
}

export default CartWithItems;
