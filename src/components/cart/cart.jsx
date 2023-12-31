import { useContext } from "react";
import SelectedBooksContext from "../../context/SelectedBooksContext";
import PurchasedBooks from "../purchasedBooks/purchasedBooks";
import EmptyCart from "../empty-cart/EmptyCart";
import "./styles.css";

export default function Cart(props) {
  const selectedBooks = useContext(SelectedBooksContext);

  const purchaseBooks = () => {
    props.setSelectedBooks([]);
  };

  if (selectedBooks.length === 0) {
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
