import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "../components/signin/Signin";
import BookList from "../components/book-list/BookList";
import SpecificBook from "../components/specific-book/SpecificBook";
import Header from "../components/header/header";
import PageNotFound from "../components/page-not-found/PageNotFound";
import { useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import BooksContext from "../context/BooksContext";
import CurrentBookContext from "../context/CurrentBookContext";
import Cart from "../components/cart/cart";

export default function MyRoutes() {
  const [user, setUser] = useState(null);

  const [books, setBooks] = useState({ books: [] });
  useEffect(() => {
    fetch("./books.json")
      .then((response) => response.json())
      .then((json) => setBooks(json));
  }, []);

  const [currentBook, setCurrentBook] = useState(null);

  // https://www.robinwieruch.de/react-router-private-routes/
  const ProtectedRoute = ({ user, redirectPath = "/", children }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }

    return children;
  };

  return (
    <UserContext.Provider value={user}>
      <BooksContext.Provider value={books}>
        <CurrentBookContext.Provider value={currentBook}>
          <Routes>
            <Route path="/" element={<Header setUser={setUser} />}>
              <Route path="/" element={<Signin setUser={setUser} />} />
              <Route
                path="/specificbook"
                element={
                  <ProtectedRoute user={user}>
                    <SpecificBook />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/booklist"
                element={
                  <ProtectedRoute user={user}>
                    <BookList setCurrentBook={setCurrentBook} />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/cart"
                element={
                  <ProtectedRoute user={user}>
                    <Cart />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </CurrentBookContext.Provider>
      </BooksContext.Provider>
    </UserContext.Provider>
  );
}
