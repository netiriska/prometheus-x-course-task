import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import cart from "../../images/header/cart.svg";
import avatar from "../../images/signin/icon-username.png";
import logo from "../../images/header/bookmark-heart.svg";
import heartUkraine from "../../images/header/ukraine_heart_sticker.png";

export default function Header(props) {
  const user = useContext(UserContext);

  const navigate = useNavigate();

  const navigateCart = () => {
    navigate("/cart");
  };

  const handleLogout = () => {
    props.setUser(null);
    props.setSelectedBooks([]);
  };

  return (
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
            <div className="headerActions__container">
              <button
                className="headerActions__cart"
                href=""
                onClick={navigateCart}
              >
                <img src={cart} alt="cart" />
              </button>
              <button className="headerActions__button" onClick={handleLogout}>
                Sign-Out
              </button>
              <img
                className="headerActions__heart"
                src={heartUkraine}
                alt="heart"
              />
              <img
                className="headerActions__avatar"
                src={avatar}
                alt="avatar"
                width="40px"
              />
              <p className="headerActions__user">{user}</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
