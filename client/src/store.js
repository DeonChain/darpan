import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./Function/Signup";
import userReducer from "./Function/User";

export default configureStore({
  reducer: {
    signup: signupReducer,
    user: userReducer
  },
});
