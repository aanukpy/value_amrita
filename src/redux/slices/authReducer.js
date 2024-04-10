import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import connect from "../../config/connect";
import { setCookies } from "../../helpers/cookies";
import network from "../../utilits/common/network";
import { setValue } from "../../helpers/localStorage";
import Snackbar from "../../Components/common/snackbar";

const initialState = {
  loading: false,
  registerData: {
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
    age: "",
    gender: "",
    phonenumber: "",
    state: "",
    country: "",
    profession: "",
    college: "",
    subject: "",
    university: "",
  },
};
const abortController = new AbortController();
const signal = abortController.signal;

export const login = createAsyncThunk("login", async (data) => {
  const res = await network.post({ url: `/login`, data, signal });
  const result = await res?.json();

  if (result.status === 200) {
    setCookies(result.token);
    Snackbar({
      type: "success",
      content: result.message,
    });
    setValue("userRole", result.role);
  } else if (result.status === 400) {
    console.log("hi");
    Snackbar({
      type: "error",
      content: result.error,
    });
  }
  return result;
});
export const register = createAsyncThunk(
  "register",
  async (data, navigation) => {
    const res = await network.post({ url: `/register`, data, signal });
    const result = await res?.json();

    if (result.status === 200) {
      Snackbar({
        type: "success",
        content: result.message,
      });
      navigation("/login");
    } else if (result.status === 400) {
      Snackbar({
        type: "error",
        content: result.error,
      });
    }
    return result;
  }
);

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateResisterData: (state, action) => {
      return {
        ...state,
        registerData: action.payload,
      };
    },
    clearState: (state, action) => {
      return {
        ...state,
        loading: false,
        registerData: {
          fullname: "",
          email: "",
          password: "",
          confirmpassword: "",
          age: "",
          gender: "",
          phonenumber: "",
          state: "",
          country: "",
          profession: "",
          college: "",
          subject: "",
          university: "",
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = true;
    });
    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = true;
    });
  },
});

export const { updateResisterData, clearState } = authReducer.actions;
export default authReducer.reducer;
