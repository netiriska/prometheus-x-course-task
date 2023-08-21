import { useState, useEffect } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Signin from "../components/signin/Signin";
import BookList from "../components/book-list/BookList";
import SpecificBook from "../components/specific-book/SpecificBook";
import Layout from "../components/layout/layout";
import PageNotFound from "../components/page-not-found/PageNotFound";
import UserContext from "../context/UserContext";
import BooksContext from "../context/BooksContext";
import CurrentBookContext from "../context/CurrentBookContext";
import Cart from "../components/cart/cart";
import SelectedBooksContext from "../context/SelectedBooksContext";

export default function MyRoutes() {
  const [user, setUser] = useState(null);

  const [books, setBooks] = useState({ books: [] });
  useEffect(() => {
    fetch("./books.json")
      .then((response) => response.json())
      .then((json) => setBooks(json));
  }, []);

  const [selectedBooks, setSelectedBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);

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
          <SelectedBooksContext.Provider value={selectedBooks}>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Layout
                      setUser={setUser}
                      setSelectedBooks={setSelectedBooks}
                    />
                  }
                >
                  <Route path="/" element={<Signin setUser={setUser} />} />
                  <Route
                    path="/specificbook"
                    element={
                      <ProtectedRoute user={user}>
                        <SpecificBook setSelectedBooks={setSelectedBooks} />
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
                        <Cart setSelectedBooks={setSelectedBooks} />
                      </ProtectedRoute>
                    }
                  ></Route>
                  <Route path="*" element={<PageNotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </SelectedBooksContext.Provider>
        </CurrentBookContext.Provider>
      </BooksContext.Provider>
    </UserContext.Provider>
  );
}
