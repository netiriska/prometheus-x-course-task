import cart from "../../images/header/cart.svg";
import "./styles.css";

export default function Cart() {
  return (
    <div className="cart__empty">
      <img className="cart__image" src={cart} alt="cart" />;<p>Cart empty...</p>
    </div>
  );
}
