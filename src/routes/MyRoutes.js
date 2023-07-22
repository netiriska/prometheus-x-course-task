import { Routes, Route } from "react-router-dom";
import Signin from "../components/signin/Signin";
import BookList from "../components/book-list/BookList";
import SpecificBook from "../components/specific-book/SpecificBook";
import Header from "../components/header/header";
import PageNotFound from "../components/page-not-found/PageNotFound";
import { useState } from "react";
import UserContext from "../context/UserContext";

export default function MyRoutes() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={user}>
      <Routes>
        <Route path="/" element={<Header setUser={setUser} />}>
          <Route path="/" element={<Signin setUser={setUser} />} />
          <Route path="/specificbook" element={<SpecificBook />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}
