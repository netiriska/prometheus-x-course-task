import Book from "../book/Book";
import "./styles.css";
import { useContext } from "react";
import BooksContext from "../../context/BooksContext";

export default function BookList(props) {
  const books = useContext(BooksContext);
  // console.log("BookList rendered");
  // console.log(books);

  return (
    <div className="books__container">
      <div className="search_select__container">
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
        <div className="select__container">
          <select name="Price">
            <option value="" disabled hidden>
              Price
            </option>
            <option className="select__all" value="all">
              All
            </option>
            <option value="Up to 15">Up to 15</option>
            <option value="From 15 to 30">From 15 to 30</option>
            <option value="More than 30">More than 30</option>
          </select>
        </div>
      </div>
      <div className="books__cards">
        {books.books.map((book) => {
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
