import { useContext, useState, useMemo } from "react";
import Book from "../book/Book";
import BooksContext from "../../context/BooksContext";
import "./styles.css";

export default function BookList(props) {
  const books = useContext(BooksContext);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filterBooks = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);
  };

  const filterOptions = {
    price: ["All", "Under $15", "$15-$30", "Over $30"],
  };

  const filteredData = useMemo(() => {
    let results = books.books;

    if (searchQuery) {
      results = results.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedPrice) {
      results = results.filter((book) => {
        const price = parseFloat(book.price);
        switch (selectedPrice) {
          case "Under $15":
            return price < 15;
          case "$15-$30":
            return price >= 15 && price <= 30;
          case "Over $30":
            return price > 30;
          default:
            return true;
        }
      });
    }

    return results;
  }, [books.books, searchQuery, selectedPrice]);
  return (
    <div className="books__container">
      <div className="search_select__container">
        <div className="search__container">
          <div className="search__form">
            <input
              className="search__input"
              type="search"
              placeholder="Search by book name"
              onChange={filterBooks}
            />
            <button className="search__button" type="button">
              Search
            </button>
          </div>
        </div>
        <div className="select__container">
          <select
            name="Price"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            <option value="" disabled hidden>
              Price
            </option>
            {filterOptions.price.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="books__cards">
        {filteredData.map((book) => {
          return (
            <Book
              key={book.id}
              book={book}
              setCurrentBook={props.setCurrentBook}
            />
          );
        })}
      </div>
    </div>
  );
}
