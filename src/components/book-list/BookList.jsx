import { useEffect, useState } from "react";
import Book from "../book/Book";
import "./styles.css";

export default function BookList() {
  const [books, setBooks] = useState({ books: [] });
  useEffect(() => {
    fetch("./books.json")
      .then((response) => response.json())
      .then((json) => setBooks(json));
  }, []);
  console.log("BookList rendered");
  console.log(books);

  return (
    <div className="books__container">
      <div className="search__container">
        <form className="search__form">
          <input
            className="search__input"
            type="search"
            placeholder="Search by book name"
          />
          <button className="search__button" type="submit">
            Search
          </button>
        </form>
        <select className="select__container" name="Price">
          <option value="" disabled selected hidden>
            Price
          </option>
          <option value="all">All</option>
          <option value="Up to 15">Up to 15</option>
          <option value="From 15 to 30">From 15 to 30</option>
          <option value="More than 30">More than 30</option>
        </select>
      </div>
      <div className="books__cards">
        {books.books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </div>
    </div>
  );
}
