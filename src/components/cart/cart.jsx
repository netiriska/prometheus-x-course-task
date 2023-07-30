import "./styles.css";
import { useContext } from "react";
import SelectedBooksContext from "../../context/SelectedBooksContext";
import PurchasedBooks from "../purchasedBooks/purchasedBooks";
import EmptyCart from "../empty-cart/EmptyCart";

export default function Cart(props) {
  const selectedBooks = useContext(SelectedBooksContext);
  console.log(selectedBooks);

  const purchaseBooks = () => {
    props.setSelectedBooks([]);
  };

  if (selectedBooks.length === 0) {
    // Показуємо пустий кошик, якщо обрані книги відсутні
    return (
      <div className="cart__empty_purchase">
        <div className="cart__purchase_button_container">
          <button
            className="cart__purchase_button"
            disabled={selectedBooks.length === 0}
            onClick={() => props.setSelectedBooks([])}
          >
            Purchase
          </button>
        </div>
        <EmptyCart />
      </div>
    );
  } else {
    return (
      <div className="cart__empty_purchase">
        <div className="cart__purchase_button_container">
          <button className="cart__purchase_button" onClick={purchaseBooks}>
            Purchase
          </button>
        </div>
        <PurchasedBooks setSelectedBooks={props.setSelectedBooks} />
      </div>
    );
  }
}
