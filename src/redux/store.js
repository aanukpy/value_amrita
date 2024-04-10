import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authReducer";
import userManagement from "./slices/userManagementReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userManagement,
  },
});

export default store;
