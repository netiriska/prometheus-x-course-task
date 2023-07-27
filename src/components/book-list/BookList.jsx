import Book from "../book/Book";
import "./styles.css";
import { useContext, useState } from "react";
import BooksContext from "../../context/BooksContext";

export default function BookList(props) {
  const books = useContext(BooksContext);
  // console.log("BookList rendered");
  // console.log(books);

  const [filteredBooksData, setFilteredBooksData] = useState(books.books);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    let updatedBooksData = [];

    updatedBooksData = books.books.filter((book) => {
      return book.title.toLowerCase().includes(value);
    });
    setFilteredBooksData(updatedBooksData);
  };

  return (
    <div className="books__container">
      <div className="search_select__container">
        <div className="search__container">
          <div className="search__form">
            <input
              className="search__input"
              type="search"
              placeholder="Search by book name"
              onChange={handleSearch}
            />
            <button className="search__button" type="button">
              Search
            </button>
          </div>
        </div>
        <div className="select__container">
          <select name="Price" defaultValue="">
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
        {filteredBooksData.map((book) => {
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
