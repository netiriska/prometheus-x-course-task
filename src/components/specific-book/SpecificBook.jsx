import CurrentBookContext from "../../context/CurrentBookContext";
import "./styles.css";
import { useContext } from "react";

export default function SpecificBook() {
  const currentBook = useContext(CurrentBookContext);
  console.log(currentBook);

  return (
    <div>
      <h1>SpecificBook page</h1>
      <div className="wrapper">
        <main>
          <div className="specific-book">
            <div className="container">
              <div className="bookinfo">
                <div className="specific-book__column specific-book__image">
                  <img
                    src={currentBook.image}
                    alt="JavaScript: The Definitive Guide, 7th Edition book"
                  />
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
                      <input type="number" id="quantity" min="1" max="42" />
                    </div>
                  </form>
                  <div className="totalPrice">
                    <div>Total price</div>
                    <p id="totalPrice">0.00</p>
                  </div>
                  <button type="submit">Add to cart</button>
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
