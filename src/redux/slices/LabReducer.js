import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import connect from "../../config/connect";
import { setCookies } from "../../helpers/cookies";
import network from "../../utilits/common/network";
import { useDispatch } from "react-redux";
import Snackbar from "../../Components/common/snackbar";

const initialState = {
  labContent: {
    theory: "",
  },
};
const abortController = new AbortController();
const signal = abortController.signal;

const LabReducer = createSlice({
  name: "labReducer",
  initialState,
  reducers: {
    updateTheroryContent: (state, action) => {
      return {
        ...state,
        labContent: {
          ...state,
          theory: action.payload,
        },
      };
    },
  },
  extraReducers: (builder) => {},
});

export const { updateTheroryContent } = LabReducer.actions;
export default LabReducer.reducer;
