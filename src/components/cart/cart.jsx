import cart from "../../images/header/cart.svg";
import "./styles.css";
import { useContext } from "react";
import SelectedBooksContext from "../../context/SelectedBooksContext";
import PurchasedBooks from "../purchasedBooks/purchasedBooks";

export default function Cart() {
  const selectedBooks = useContext(SelectedBooksContext);
  console.log(selectedBooks);

  if (selectedBooks.length === 0) {
    // Показуємо пустий кошик, якщо обрані книги відсутні
    return (
      <div className="cart__empty_purchase">
        <div className="cart__purchase_button_container">
          <button className="cart__purchase_button">Purchase</button>
        </div>
        <div className="cart__empty">
          <img className="cart__image" src={cart} alt="cart" />
          <p>Cart empty...</p>
        </div>
      </div>
    );
  } else {
    return <PurchasedBooks />;
  }
}
