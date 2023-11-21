import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
