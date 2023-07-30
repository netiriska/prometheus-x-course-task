import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../images/header/bookmark-heart.svg";
import UserContext from "../../context/UserContext";
import HeaderActions from "./headerActions";
import Footer from "../footer/footer";
import "./styles.css";

export default function Header(props) {
  const user = useContext(UserContext);

  return (
    <div>
      <header>
        <div className="authorization__container">
          <div className="authorization">
            <nav>
              <Link to="/booklist" className="main-header">
                WITH LOVE
                {/* span - однаковий відступ до тексту від icon */}
                <span>
                  <img className="main-header__icon" src={logo} alt="" />
                </span>
                BOOK STORE / Khomenko Iryna
              </Link>
            </nav>
          </div>
          <div>
            {/* передаємо в HeaderActions функцію setUser з MyRoutes */}
            {user && (
              <HeaderActions
                setUser={props.setUser}
                setSelectedBooks={props.setSelectedBooks}
              />
            )}
          </div>
        </div>
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}
