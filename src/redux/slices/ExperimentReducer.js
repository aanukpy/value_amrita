import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import connect from "../../config/connect";
import { setCookies } from "../../helpers/cookies";
import network from "../../utilits/common/network";
import { useDispatch } from "react-redux";
import Snackbar from "../../Components/common/snackbar";

const initialState = {
  selectedCategory: "Theory",
};
const abortController = new AbortController();
const signal = abortController.signal;

const ExperimentReducer = createSlice({
  name: "experimentReducer",
  initialState,
  reducers: {
    updateSelectedCategory: (state, action) => {
      return {
        ...state,
        selectedCategory: action.payload,
      };
    },
  },
  extraReducers: (builder) => {},
});

export const { updateSelectedCategory } = ExperimentReducer.actions;
export default ExperimentReducer.reducer;
