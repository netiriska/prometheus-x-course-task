import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../images/signin/icon-username.png";
import "./styles.css";

export default function Signin(props) {
  // Створюємо стейт для збереження значення інпуту
  const [usernameValue, setUsernameValue] = useState(null);

  const [disabled, setDisabled] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsernameValue(e.target.value);
    setIsUserTyping(true);
    if (e.target.value.length >= 4 && e.target.value.length <= 16) {
      setDisabled(false);
      setShowErrorMessage(false);
    } else {
      setDisabled(true);
      setShowErrorMessage(true);
    }
  };

  useEffect(() => {
    if (disabled) {
      setShowErrorMessage(true);
    }
  }, [disabled]);

  const handleInputBlur = (e) => {
    if (e.target.value === "") {
      setIsUserTyping(false);
      setShowErrorMessage(false);
    }
  };

  const navigateBooklist = () => {
    props.setUser(usernameValue);
    // 👇️ navigate to /
    navigate("/booklist");
  };

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
              {showErrorMessage && isUserTyping && (
                <span className="input_error-message">
                  Username must have at least 4 characters but cannot exceed 16
                  characters
                </span>
              )}
            </div>
            <button
              className="sign-in__button"
              type="submit"
              name="submit"
              disabled={disabled}
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
