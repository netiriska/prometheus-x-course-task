import { useContext } from "react";
import UserContext from "../../context/UserContext";
import cart from "../../images/header/cart.svg";
import avatar from "../../images/signin/avatar.png";

export default function HeaderActions(props) {
  const handleLogout = () => props.setUser(null);

  const user = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <a className="" href="">
        <img src={cart} alt="cart" width="40px" />
      </a>
      <button onClick={handleLogout}>LogOut</button>
      <img src={avatar} alt="avatar" width="40px" />
      <h1>{user}</h1>
    </div>
  );
}
