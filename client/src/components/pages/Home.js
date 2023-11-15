import React from "react";
import "./css/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/Signup"}>Singup</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
};

export default Home;