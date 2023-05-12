import { useContext, useEffect, useState } from "react";
import { CartContext } from "../routes/ProductPage.jsx";

function CartItem({setCount}) {
  const [quantity, setQuantity] = useState(1);
  const { cartItem, setCartItem } = useContext(CartContext);

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity, item) => {
    const rounded = quantity * item;
    return rounded.toFixed(2);
  };

  const [deleteItem, setDeleteItem] = useState(cartItem);

  const removeFromCart = (id) => {
    const updateCart = cartItem.filter((item) => item.id !== id);
    setDeleteItem(updateCart);
    const json = JSON.stringify(cartItem.id);
    localStorage.removeItem("cartItem", json);
  };

  useEffect(() => {
    setCartItem(deleteItem);
  }, [deleteItem, setCartItem]);

  return (
    <>
      {cartItem.map((item, id) => (
        <div key={id} className="cart-item">
          <div className="cart-img">
            <img src={item[0].image} alt="product" />
          </div>
          <div className="cart-middle">
            <p className="cart-name">{item[0].name}</p>
            <div className="cart-btns">
              <button onClick={() => {decrease(); setCount(quantity - 1)}}>-</button>
              <p className="quantity">{quantity}</p>
              <button onClick={() => {increase(); setCount(quantity + 1)}}>+</button>
            </div>
          </div>
          <div className="cart-right">
            <p className="cart-price">R${calcPrice(quantity, item[0].price)}</p>
            <i
              onClick={() => removeFromCart(item.id)}
              className="fa-sharp fa-solid fa-xmark"
            ></i>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartItem;
