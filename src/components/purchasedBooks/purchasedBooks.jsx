import { useContext, useState, useEffect } from "react";
import SelectedBooksContext from "../../context/SelectedBooksContext";
import deleteIcon from "../../images/specific-book/trash-fill.svg";
import EmptyCart from "../empty-cart/EmptyCart";
import "./styles.css";

export default function PurchasedBooks(props) {
  const selectedBooks = useContext(SelectedBooksContext);

  useEffect(() => {
    const grandTotal = selectedBooks.reduce(
      (totalPrice, book) => totalPrice + book.totalPrice,
      0
    );
    setGrandTotal(grandTotal);
  }, [selectedBooks]);

  const [grandTotal, setGrandTotal] = useState(0);

  const deleteTableRows = (index) => {
    props.setSelectedBooks((prevSelectedBooks) => {
      const books = [...prevSelectedBooks];
      books.splice(index, 1);
      return books;
    });
  };

  return (
    <div className="purchase__table-container">
      {selectedBooks.length > 0 ? (
        <div className="purchase__table">
          <table>
            <thead>
              <tr>
                <th>Book title</th>
                <th>Price</th>
                <th>Count</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {selectedBooks.map((book, index) => (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>${book.price}</td>
                  <td>{book.quantity}</td>
                  <td>${book.totalPrice}</td>
                  <td>
                    <button
                      className="purchase__delete-button"
                      onClick={() => deleteTableRows(index)}
                    >
                      <span>
                        <img
                          className="purchase__delete-button_icon"
                          src={deleteIcon}
                          alt="Delete"
                        />
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td className="purchase__grand-total">Grand Total</td>
                <td className="purchase__grand-total">
                  ${grandTotal.toFixed(2)}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
