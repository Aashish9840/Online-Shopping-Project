import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export const SignIn = () => {
  return (
    <div className="wrapper">
      <div className="core-login-container">
        <div className="login-form">
          <form action="#" className="input-form">
            <h1>Signin</h1>
            <div className="input-container">
              <input
                type="text"
                id="input"
                minLength={10}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                id="input"
                minLength={10}
                required
                placeholder="Email"
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                id="password"
                minLength={8}
                required
                placeholder="Password"
              />
            </div>

            <button type="submit">Continue</button>
          </form>
        </div>
        <div className="sign-details-buttom">
          <h1>
            Already have an Account?
            <Link className="link-design" to="/login">
              <span>Login Here</span>
            </Link>
          </h1>
          <div className="label-defination">
            <label htmlFor="">
              <input type="checkbox" id="agree" name="agree" value="yes" />
              By continuing, I aggre to term and conditions
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
