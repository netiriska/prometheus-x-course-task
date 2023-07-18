import React, { useState, useEffect } from "react";
import avatar from "../../images/signin/avatar.png";
import "./styles.css";
import Footer from "../footer/footer";

export default function Signin() {
  const [disabled, setDisabled] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);

  const handleChange = (e) => {
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

  return (
    <div>
      <h1>Signin page</h1>
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
            >
              Sign-In
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
