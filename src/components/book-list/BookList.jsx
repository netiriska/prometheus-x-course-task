import { useEffect, useState } from "react";
import Book from "../book/Book";

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
    <div>
      <h1>BookList page</h1>
      {books.books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </div>
  );
}
