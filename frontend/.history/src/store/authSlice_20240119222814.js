import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Authentication",
  initialState: {
    authData: null.auth,
    loading: false,
    error: null,
  },
  reducers: {
    toggleLoading(state, action) {},
  },
});
