import { useContext } from "react";
import SelectedBooksContext from "../../context/SelectedBooksContext";
import "./styles.css";
import { RiDeleteBin2Line } from "react-icons/ri";

export default function PurchasedBooks() {
  const selectedBooks = useContext(SelectedBooksContext);

  return (
    <div className="purchase__table-container">
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
            {selectedBooks.map((book, key) => (
              <tr key={key}>
                <td>{book.title}</td>
                <td>{book.price}</td>
                <td>{book.quantity}</td>
                <td>{book.totalPrice}</td>
                <td>
                  <button className="purchase__delete-button">
                    <RiDeleteBin2Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
