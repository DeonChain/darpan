import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { u_email, u_password } from "../../Function/Signup";
import validator from "validator";

const Login = () => {
  const data = useSelector((state) => state.signup);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (!email || !validator.isEmail(email)) {
      throw new Error(
        JSON.stringify({ status: 400, message: "Please provide a valid email" })
      );
    } else if (!validator.isStrongPassword(password)) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "Please enter a strong password",
        })
      );
    }
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    let res = await response.json();
    if (response.status === 200) {
      alert("logged in");
      // === === === will redirect to dashboard but for now to root page === === === //
      Navigate("/");
    } else {
      return alert(res.message);
    }
  };
  const loginwithgoogle = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/google/url", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      let data = await response.json();
      window.location.replace(data.url);
    } catch (error) {
      return alert("Some error occured");
    }
  };
  return (
    <div className="flxcenter">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input">
            <input
              type="text"
              placeholder="Email"
              value={data.email}
              onChange={(e) => {
                dispatch(u_email(e.target.value));
              }}
            />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => {
                dispatch(u_password(e.target.value));
              }}
            />
          </div>
          <button type="submit" className="btn" onClick={login}>
            Login
          </button>
          <p>
            <button
              type="button"
              className="login-with-google-btn"
              onClick={loginwithgoogle}
            >
              Sign in with Google
            </button>
            <br />
            Don't have a account?
            <Link to="/Signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
