import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authReducer";
import userManagement from "./slices/userManagementReducer";
import experimentReducer from "./slices/ExperimentReducer";
import LabReducer from "./slices/LabReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userManagement,
    exp: experimentReducer,
    lab: LabReducer,
  },
});

export default store;
