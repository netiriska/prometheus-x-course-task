import CurrentBookContext from "../../context/CurrentBookContext";
import SelectedBooksContext from "../../context/SelectedBooksContext";
import "./styles.css";
import { useContext, useState } from "react";

export default function SpecificBook(props) {
  const currentBook = useContext(CurrentBookContext);
  // console.log(currentBook);

  const selectedBooks = useContext(SelectedBooksContext);
  // console.log(selectedBooks);

  const [quantity, setQuantity] = useState(1); // Встановлюємо початкове значення 1

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  const addToCart = () => {
    let book = Object.assign({}, currentBook, {
      quantity: quantity,
      totalPrice: totalPrice,
    });
    selectedBooks.push(book);
  };

  const totalPrice = parseFloat((currentBook.price * quantity).toFixed(2));

  return (
    <div>
      <div className="wrapper">
        <main>
          <div className="specific-book">
            <div className="container">
              <div className="bookinfo">
                <div className="specific-book__column specific-book__image">
                  <img src={currentBook.image} alt="Book image" />
                </div>
                <div className="specific-book__column specific-book__info">
                  <p>
                    <strong>Book name: </strong>
                    {currentBook.title}
                  </p>
                  <p>
                    <strong>Book author: </strong>
                    {currentBook.author}
                  </p>
                  <p>
                    <strong>Book level: </strong>
                    {currentBook.level}
                  </p>
                  <p>
                    <strong>Book tags: </strong>
                    {currentBook.tags}
                  </p>
                </div>
                <div className="specific-book__column specific-book__calculation">
                  <div className="price">
                    <p>Price</p>
                    <p id="pricePerBook">{currentBook.price}</p>
                  </div>
                  <form action="/">
                    <div className="choice">
                      <label htmlFor="quantity">Count</label>
                      <input
                        type="number"
                        id="quantity"
                        min="1"
                        max="42"
                        value={quantity}
                        onChange={handleQuantityChange}
                      />
                    </div>
                  </form>
                  <div className="totalPrice">
                    <div>Total price</div>
                    <p id="totalPrice">{totalPrice}</p>
                  </div>
                  <div className="specific-book__button">
                    <button
                      className="specific-book__add_button"
                      onClick={addToCart}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="bookview">
                <div className="specific-book__column specific-book__description">
                  <p>
                    <strong>Description: </strong>
                    {currentBook.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
