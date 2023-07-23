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
      </div>
      <div className="books__cards">
        {books.books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </div>
    </div>
  );
}
