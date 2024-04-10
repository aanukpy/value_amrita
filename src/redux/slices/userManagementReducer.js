import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import connect from "../../config/connect";
import { setCookies } from "../../helpers/cookies";
import network from "../../utilits/common/network";
import { setValue } from "../../helpers/localStorage";
import Snackbar from "../../Components/common/snackbar";

const initialState = {
  crudId: 1,
  cardColor: "primary",
};

const userManagementReducer = createSlice({
  name: "usermanagement",
  initialState,
  reducers: {
    modifyCrudOperation: (state, action) => {
      return {
        ...state,
        crudId: action.payload,
      };
    },
    modifyCardColor: (state, action) => {
      return {
        ...state,
        cardColor: action.payload,
      };
    },

    clearState: (state, action) => {
      return {
        ...state,
        crudId: 1,
      };
    },
  },
  extraReducers: (builder) => {},
});

export const { modifyCrudOperation, modifyCardColor, clearState } =
  userManagementReducer.actions;
export default userManagementReducer.reducer;
