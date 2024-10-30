import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import axios from "axios";

import "./signup.scss";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/auth/signup", {
        name: username,
        password,
        email,
      })
      .then((resp) => {
        if (resp) {
          console.log("response: ", resp);
          if (resp.status === 201) {
            sessionStorage.setItem("token", resp.data.token);
            navigate("/dashboard");
          }
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
        if (error.status === 400) {
          setError(true);
        }
      });
  };
  return (
    <div className={`wrapper`}>
      <div className="form-box signup">
        <form onSubmit={handleSignUp}>
          <h1>Sign Up</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className="icon" />
          </div>
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
              <input type="checkbox" />I agree to the terms & conditions
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit">SignUp</button>

          <div className="signup-link">
            <p>
              Already have an account?{" "}
              <a href="#" onClick={() => navigate("/")}>
                Sign In
              </a>
            </p>
          </div>
          {error === true ? (
            <div className="signup-error">
              <p>Password should meet the following criteria:</p>
              <ul>
                <li>Minimum length of 8 characters </li>
                <li>Contains at least 1 letter. </li>
                <li>Contains at least 1 number.</li>
                <li>Contains at least 1 special character.</li>
              </ul>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
