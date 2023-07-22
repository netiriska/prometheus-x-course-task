import { Link, Outlet } from "react-router-dom";
import logo from "../../images/header/bookmark-heart.svg";
import "./styles.css";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

export default function Header(props) {
  const user = useContext(UserContext);
  console.log(user);

  const handleLogout = () => props.setUser(null);

  return (
    <header>
      <div className="container">
        <div className="authorization">
          <a href="/" className="main-header">
            WITH LOVE
            <img src={logo} alt="" /> BOOK STORE / Khomenko Iryna
          </a>
        </div>
        <div>
          <h1>{user}</h1>
          <button onClick={handleLogout}>LogOut</button>
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
