import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../Function/User";
function Nav({ type }) {
  const [menu, setmenu] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  let auther = async () => {
    const response = await fetch("/api/authenticate", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    let res = await response.json();
    dispatch(update(res));
  };
  useEffect(() => {
    if (!data.email) {
      auther();
    }
  }, []);

  let logout = async () => {
    const response = await fetch("/api/logout", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    window.location.replace("/");
  };
  return (
    <header class="header" data-header>
      <div class="container">
        <NavLink to="/" className="logo">
          <h2>Darpan Analytics</h2>
        </NavLink>
        <nav class="navbar" data-navbar>
          {type === "login" || type === "signup" ? (
            ""
          ) : (
            <>
              <div class="wrapper">
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

              <ul class="navbar-list"></ul>
            </>
          )}
        </nav>

        <div class="header-actions">
          {type === "login" || type === "signup" ? (
            ""
          ) : (
            <>
              {data.email ? (
                <>
                  <button
                    class="header-action-btn"
                    aria-label="cart"
                    title="Cart"
                    onClick={() => setmenu(!menu)}
                  >
                    <ion-icon name="person-circle"></ion-icon>
                  </button>
                  <div class={menu ? "menu active" : "menu"}>
                    <ul>
                      <li>
                        <NavLink to="/profile">
                          <ion-icon name="person"></ion-icon>&nbsp;Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/newtest">
                          <ion-icon name="clipboard"></ion-icon>&nbsp;New Test
                        </NavLink>
                      </li>
                      <li>
                        <a onClick={logout}>
                          <ion-icon name="log-out-sharp"></ion-icon>&nbsp;Sign
                          Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <NavLink to="/login" class="btn has-before">
                  <a class="btn has-before">
                    <span class="span">Login</span>

                    <ion-icon
                      name="arrow-forward-outline"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </NavLink>
              )}
            </>
          )}
        </div>

        <div class="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
}

export default Nav;
