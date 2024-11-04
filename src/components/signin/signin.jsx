import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLock, FaEnvelope } from "react-icons/fa";

import axios from "../../core/axios.interceptor";
import "./signin.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signin", {
        password,
        email,
      })
      .then((resp) => {
        if (resp) {
          console.log("response: ", resp);
          if (resp.status === 201) {
            navigate("/dashboard");
          }
        }
      })
      .catch((error) => {
        if (error.status === 401 || error.status === 400) {
          setError(true);
        }
      });
  };
  return (
    <div className={`wrapper`}>
      <div className="form-box signin">
        <form onSubmit={handleSignIn}>
          <h1>Sign In</h1>
          {error === true ? (
            <div className="signin-error">
              <p>Invalid email or password</p>
            </div>
          ) : null}

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit">SignIn</button>

          <div className="signin-link">
            <p>
              Dont have an account?{" "}
              <a href="#" onClick={() => navigate("/signup")}>
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
