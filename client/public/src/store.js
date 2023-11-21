import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./Function/Signup";

export default configureStore({
  reducer: {
    signup: signupReducer,
  },
});
