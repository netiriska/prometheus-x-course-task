import { Routes, Route } from "react-router-dom";

import Signin from "../components/signin/Signin";
import BookList from "../components/book-list/BookList";
import SpecificBook from "../components/specific-book/SpecificBook";
import Header from "../components/header/header";
import PageNotFound from "../components/page-not-found/PageNotFound";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Signin />} />
        <Route path="/specificbook" element={<SpecificBook />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
