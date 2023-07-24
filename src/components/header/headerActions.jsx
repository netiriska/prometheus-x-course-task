import { useContext } from "react";
import UserContext from "../../context/UserContext";
import cart from "../../images/header/cart.svg";
import avatar from "../../images/signin/icon-username.png";
import heartUkraine from "../../images/header/ukraine_heart_sticker.png";

export default function HeaderActions(props) {
  const handleLogout = () => props.setUser(null);

  const user = useContext(UserContext);
  console.log(user);

  return (
    <div className="headerActions__container">
      <a className="headerActions__cart" href="">
        <img src={cart} alt="cart" />
      </a>
      <button className="headerActions__button" onClick={handleLogout}>
        Sign-Out
      </button>
      <img src={heartUkraine} alt="heart" />
      <img
        className="headerActions__avatar"
        src={avatar}
        alt="avatar"
        width="40px"
      />
      <p className="headerActions__user">{user}</p>
    </div>
  );
}
