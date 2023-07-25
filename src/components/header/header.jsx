import { Link, Outlet } from "react-router-dom";
import logo from "../../images/header/bookmark-heart.svg";
import "./styles.css";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import HeaderActions from "./headerActions";
import Footer from "../footer/footer";

export default function Header(props) {
  const user = useContext(UserContext);

  return (
    <div>
      <header>
        <div className="authorization__container">
          <div className="authorization">
            <a href="/" className="main-header">
              WITH LOVE
              {/* span - однаковий відступ до тексту від icon */}
              <span>
                <img src={logo} alt="" />
              </span>
              BOOK STORE / Khomenko Iryna
            </a>
          </div>
          <div>
            {/* передаємо в HeaderActions функцію setUser з MyRoutes */}
            {user && <HeaderActions setUser={props.setUser} />}
          </div>
        </div>
        <nav>
          <div>
            <Link to="/">Signin</Link>
            <Link to="/booklist">BookList</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}
