import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  u_email,
  u_password,
  u_cpassword,
  u_name,
  u_phone,
} from "../../Function/Signup";
import validator from "validator";

const Signup = () => {
  const data = useSelector((state) => state.signup);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    const { email, name, phone, cPassword, password } = data;
    if (!email || !validator.isEmail(email)) {
      throw new Error(
        JSON.stringify({ status: 400, message: "Please provide a valid email" })
      );
    } else if (!phone || !validator.isMobilePhone(phone, "en-IN")) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "Please provide a valid Mobile number",
        })
      );
    } else if (!password || !cPassword) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "Please input every field",
        })
      );
    } else if (password !== cPassword) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "Both password must be identical",
        })
      );
    } else if (!validator.isStrongPassword(password)) {
      throw new Error(
        JSON.stringify({
          status: 400,
          message: "Please enter a strong password",
        })
      );
    }
    const response = await fetch("/api/Register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        cpassword: cPassword,
        name,
        phone,
      }),
    });
    let res = await response.json();
    if (response.status === 201) {
      alert("registered successfully");
      Navigate("/login");
    } else {
      return alert(res.message);
    }
  };
  const signupwithgoogle = async (e) => {
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
        <form>
          <h1>Sign up</h1>
          <div className="input">
            <input
              type="text"
              placeholder="Full Name"
              value={data.name}
              onChange={(e) => {
                dispatch(u_name(e.target.value));
              }}
            />
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Phone number"
              value={data.phone}
              onChange={(e) => {
                dispatch(u_phone(e.target.value));
              }}
            />
          </div>
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
          <div className="input">
            <input
              type="password"
              placeholder="Confirm Password"
              value={data.cPassword}
              onChange={(e) => {
                dispatch(u_cpassword(e.target.value));
              }}
            />
          </div>
          <button type="submit" className="btn" onClick={register}>
            Sign up
          </button>
          <p>
            <button
              type="button"
              className="login-with-google-btn"
              onClick={signupwithgoogle}
            >
              Sign up with Google
            </button>
            <br />
            Already have an account?
            <Link to="/login">login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
