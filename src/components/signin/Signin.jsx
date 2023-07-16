import avatar from "../../images/signin/avatar.png";
import "./styles.css";

export default function Signin() {
  return (
    <div>
      <h1>Signin page</h1>
      <div className="container">
        <div className="sign-in">
          <img className="sign-in__image" src={avatar} alt="avatar" />
          <form action="/handling-form-page" method="post">
            <div className="sign-in__form">
              <label className="sign-in__label" for="username">
                Username
              </label>

              <input
                className="sign-in__input"
                type="text"
                id="username"
                name="user_name"
                placeholder="Username"
              />
            </div>
            <div className="sign-in__form">
              <label className="sign-in__label" for="password"></label>
              <input
                className="sign-in__input"
                type="password"
                id="password"
                name="user_password"
                placeholder="Password"
              />
            </div>
            <button className="sign-in__button" type="submit" name="submit">
              Sign-In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
