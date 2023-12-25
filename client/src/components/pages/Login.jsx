import React from "react";
import { Link, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { u_email, u_password } from "../../Function/Signup";
import { update } from "../../Function/User";
import validator from "validator";
import Nav from "../templates/Nav";
import { useEffect } from "react";

const Login = () => {
  const logged = useLoaderData();
  const dispatch = useDispatch();
  useEffect(() => {
    if (logged.email) {
      dispatch(update(logged))
      Navigate("/")
    }
  }, [])
  const data = useSelector((state) => state.signup);
  const Navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (!email || !validator.isEmail(email)) {
      return alert("Please enter a valid email")
    } else if (!validator.isStrongPassword(password)) {
      return alert("Please enter a Strong password")
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
    <>
      <Nav type={"login"} />
      <div className="flxcenter container">
        <div className="wrapper">
          <form action="">
            <h2>Welcome Back</h2>
            <div className="input">
              <input
                className="input-box"
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
                className="input-box"
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => {
                  dispatch(u_password(e.target.value));
                }}
              />
            </div>
            <button type="submit" className="login-btn-1" onClick={login}>
              Login
            </button>
            <p>
              <button
                type="button"
                className="login-btn"
                onClick={loginwithgoogle}
              >
                <ion-icon name="logo-google" className="s-icon"></ion-icon>
                <p className="signin-para"> Sign in with Google</p>
              </button>
              <br />
              Don't have a account?
              <Link to="/Signup">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
