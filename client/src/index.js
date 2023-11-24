import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

// === === === importing pages === === === //
import ErrorPage from "./components/pages/error-page";
import Home from "./components/pages/Home.jsx"
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
// === === === Ends here === === === //

const root = ReactDOM.createRoot(document.getElementById("root"));

// === === === configuring router === === === //

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    async loader() {
      const response = await fetch("/api/authenticate", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      let res = await response.json();
      return res;
    }
  },
  {
    path: "/Signup",
    element: <Signup />,
    async loader() {
      const response = await fetch("/api/authenticate", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      let res = await response.json();
      return res;
    },

  },
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
