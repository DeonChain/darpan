import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../Function/User";
function Nav({ type }) {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.user);
  let auther = async () => {
    const response = await fetch("/api/authenticate", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    let res = await response.json();
    dispatch(update(res));
  }
  if (!data.email) {
    auther()
  }

  return (
    <header class="header" data-header>
      <div class="container">
        <NavLink to="/" className="logo">
          <h2>Darpan Analytics</h2>
        </NavLink>
        <nav class="navbar" data-navbar>
          {type === "login" || type === "signup" ? "" : <><div class="wrapper">
            <a href="#" class="logo">
              <img
                src="./images/logo.svg"
                width="162"
                height="50"
                alt="EduWeb logo"
              />
            </a>
            <button
              class="nav-close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

            <ul class="navbar-list">
              <li class="navbar-item">
                <a href="#home" class="navbar-link" data-nav-link>
                  Home
                </a>
              </li>

              <li class="navbar-item">
                <a href="#about" class="navbar-link" data-nav-link>
                  About
                </a>
              </li>

              <li class="navbar-item">
                <a href="#courses" class="navbar-link" data-nav-link>
                  Courses
                </a>
              </li>

              <li class="navbar-item">
                <a href="#blog" class="navbar-link" data-nav-link>
                  Blog
                </a>
              </li>

              <li class="navbar-item">
                <a href="#" class="navbar-link" data-nav-link>
                  Contact
                </a>
              </li>
            </ul>
          </>}
        </nav>

        <div class="header-actions">
          {type === "login" || type === "signup" ? "" : <><button
            class="header-action-btn"
            aria-label="toggle search"
            title="Search"
          >
            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
          </button>

            <button class="header-action-btn" aria-label="cart" title="Cart">
              <ion-icon name="cart-outline" aria-hidden="true"></ion-icon>

              <span class="btn-badge">0</span>
            </button>
            {/* profile drop down here if user is logged in */}
            {data.email ? "" : <NavLink to="/login" class="btn has-before">
              <a class="btn has-before">
                <span class="span">Login</span>

                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </NavLink>}
          </>}
          <button
            class="header-action-btn"
            aria-label="open menu"
            data-nav-toggler
          >
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <div class="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
}

export default Nav;
