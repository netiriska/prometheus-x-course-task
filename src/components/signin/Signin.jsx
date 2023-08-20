import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../images/signin/icon-username.png";
import "./styles.css";

export default function Signin(props) {
  // Створюємо стейт для збереження значення інпуту
  const [usernameValue, setUsernameValue] = useState("");

  const [isUserTyping, setIsUserTyping] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const trimmedUsername = e.target.value.trim();
    setUsernameValue(trimmedUsername);
    setIsUserTyping(true);
  };

  const handleInputBlur = (e) => {
    if (e.target.value === "") {
      setIsUserTyping(false);
    }
  };

  const navigateBooklist = () => {
    props.setUser(usernameValue);
    // 👇️ navigate to /
    navigate("/booklist");
  };

  const availableUsername =
    usernameValue.length >= 4 && usernameValue.length <= 16;

  return (
    <div className="auth-form-container">
      <div className="container">
        <div className="sign-in">
          <img className="sign-in__image" src={avatar} alt="avatar" />
          <form action="/handling-form-page" method="post">
            <div className="sign-in__form">
              <label className="sign-in__label" htmlFor="username">
                Username
              </label>

              <input
                className="sign-in__input"
                type="text"
                id="username"
                name="user_name"
                placeholder="Username"
                onChange={handleChange}
                onBlur={handleInputBlur}
              />
              {!availableUsername && isUserTyping ? (
                <span className="input_error-message">
                  Username must have at least 4 characters but cannot exceed 16
                  characters
                </span>
              ) : null}
            </div>
            <button
              className="sign-in__button"
              type="submit"
              name="submit"
              disabled={!availableUsername}
              onClick={navigateBooklist}
            >
              Sign-In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
