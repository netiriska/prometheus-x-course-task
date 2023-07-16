import { Link, Outlet } from "react-router-dom";
import logo from "../../images/header/bookmark-heart.svg";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="authorization">
          <a href="/" className="main-header">
            WITH LOVE
            <img src={logo} alt="" /> BOOK STORE / Khomenko Iryna
          </a>
        </div>
      </div>
      <nav>
        <div>
          <Link to="/">Signin</Link>
          <Link to="/specificbook">SpecificBook</Link>
          <Link to="/booklist">BookList</Link>
        </div>
      </nav>
      <Outlet />
    </header>
  );
}
