import cart from "../../images/header/cart.svg";
import "./styles.css";
import { useContext } from "react";
import SelectedBooksContext from "../../context/SelectedBooksContext";

export default function Cart() {
  const selectedBooks = useContext(SelectedBooksContext);
  console.log(selectedBooks);
  return (
    <div className="cart__empty">
      <img className="cart__image" src={cart} alt="cart" />;<p>Cart empty...</p>
    </div>
  );
}
