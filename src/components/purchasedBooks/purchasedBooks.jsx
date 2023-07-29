import { useContext, useState } from "react";
import SelectedBooksContext from "../../context/SelectedBooksContext";
import "./styles.css";
import { RiDeleteBin2Line } from "react-icons/ri";
import EmptyCart from "../empty-cart/EmptyCart";

export default function PurchasedBooks() {
  const selectedBooks = useContext(SelectedBooksContext);
  const [rowsData, setRowsData] = useState(selectedBooks);

  const grandTotal = rowsData.reduce(
    (totalPrice, book) => totalPrice + book.totalPrice,
    0
  );

  const deleteTableRows = (index) => {
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };
  return (
    <div className="purchase__table-container">
      {rowsData.length > 0 ? (
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
              {rowsData.map((book, index) => (
                <tr
                  key={index}
                  deleteTableRows={deleteTableRows}
                  handleChange={handleChange}
                >
                  <td>{book.title}</td>
                  <td>${book.price}</td>
                  <td>{book.quantity}</td>
                  <td>${book.totalPrice}</td>
                  <td>
                    <button
                      className="purchase__delete-button"
                      onClick={() => deleteTableRows(index)}
                    >
                      <RiDeleteBin2Line />
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td className="grand-total">Grand Total</td>
                <td>${grandTotal}</td>
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
