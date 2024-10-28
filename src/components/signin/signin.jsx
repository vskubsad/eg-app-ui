import React, { useState } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./signin.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3000/auth/signin",
        {
          password,
          email,
        },
        {
          headers: {
            "Content-Type": "Application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((resp) => {
        if (resp) {
          console.log("response: ", resp);
          if (resp.status === 201) {
            sessionStorage.setItem("token", resp.data.token);
            navigate("/dashboard");
          }
        }
      })
      .catch((error) => console.log("Error: ", error));
  };
  return (
    <div className={`wrapper`}>
      <div className="form-box signin">
        <form onSubmit={handleSignIn}>
          <h1>Sign In</h1>
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

          <div className="signup-link">
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
