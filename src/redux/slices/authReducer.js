import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import connect from "../../config/connect";
import { setCookies } from "../../helpers/cookies";
import network from "../../utilits/common/network";

const initialState = {
  loading: false,
};
const abortController = new AbortController();
const signal = abortController.signal;

export const adminlogin = createAsyncThunk("adminlogin", async (data) => {
  const res = await network.post({ url: `/admin/login`, data, signal });
  const result = await res?.json();

  if (result.status === 200) {
    setCookies(result.token);
  } else if (result.status === 400) {
    console.log("hi");
  }
  return result;
});

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(adminlogin.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(adminlogin.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(adminlogin.rejected, (state, action) => {
      state.loading = true;
    });
  },
});

export const {} = authReducer.actions;
export default authReducer.reducer;
