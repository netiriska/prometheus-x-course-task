import "./styles.css";

export default function SpecificBook(props) {
  return (
    <div>
      <h1>SpecificBook page</h1>
      <div className="wrapper">
        <main>
          <div class="specific-book">
            <div class="container">
              <div class="bookinfo">
                <div class="specific-book__column specific-book__image">
                  <img
                    src={props.image}
                    alt="JavaScript: The Definitive Guide, 7th Edition book"
                  />
                </div>
                <div class="specific-book__column specific-book__info">
                  <p>
                    <strong>Book name: </strong>JavaScript: The Definitive
                    Guide, 7th Edition
                  </p>
                  <p>
                    <strong>Book author: </strong>David Flanagan
                  </p>
                  <p>
                    <strong>Book level: </strong>Beginner
                  </p>
                  <p>
                    <strong>Book tags: </strong>core
                  </p>
                </div>
                <div class="specific-book__column specific-book__calculation">
                  <div class="price">
                    <p>Price</p>
                    <p id="pricePerBook">$52.72</p>
                  </div>
                  <form action="/">
                    <div class="choice">
                      <label for="quantity">Count</label>
                      <input type="number" id="quantity" min="1" max="42" />
                    </div>
                  </form>
                  <div class="totalPrice">
                    <div>Total price</div>
                    <p id="totalPrice">0.00</p>
                  </div>
                  <button type="submit">Add to cart</button>
                </div>
              </div>
              <div class="bookview">
                <div class="specific-book__column specific-book__description">
                  <p>
                    <strong>Description: </strong>JavaScript is the programming
                    language of the web and is used by more software developers
                    today than any other programming language.
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
