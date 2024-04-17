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
  broadDetails: [],
  loading: false,
};
const abortController = new AbortController();
const signal = abortController.signal;

export const getAllBroad = createAsyncThunk("getbroad", async (data) => {
  const res = await network.get({
    url: "/broadArea/getAllBroad",
    data,
    signal,
  });
  const result = await res?.json();
  return result;
});
export const addBroadDetails = createAsyncThunk("addbroad", async (data) => {
  console.log(data);
  const res = await network.post({
    url: "/broadArea/addBroad",
    data,
    signal,
  });
  const result = await res?.json();
  return result;
});
export const addLabDetails = createAsyncThunk("addLab", async (data) => {
  const res = await network.post({
    url: "/broadArea/addLab",
    data,
    signal,
  });
  const result = await res?.json();
  return result;
});

const BroadAreaReducer = createSlice({
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
  extraReducers: (builder) => {
    builder.addCase(getAllBroad.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllBroad.fulfilled, (state, action) => {
      state.loading = false;
      state.broadDetails = action.payload?.broadDetails;
    });
    builder.addCase(getAllBroad.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addBroadDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addBroadDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.broadDetails = action.payload?.broadDetails;
    });
    builder.addCase(addBroadDetails.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addLabDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addLabDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.broadDetails = action.payload?.broadDetails;
    });
    builder.addCase(addLabDetails.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { updateTheroryContent } = BroadAreaReducer.actions;
export default BroadAreaReducer.reducer;
