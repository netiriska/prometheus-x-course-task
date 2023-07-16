import { Routes, Route } from "react-router-dom";

import Signin from "../components/signin/Signin";
import BookList from "../components/book-list/BookList";
import SpecificBook from "../components/specific-book/SpecificBook";
import Header from "../components/header/header";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<BookList />} />
        <Route path="/specificbook" element={<SpecificBook />} />
        <Route path="/signin" element={<Signin />} />
      </Route>
    </Routes>
  );
}
