import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Authentication",
  initialState: {
    authData: null.auth,
    loading: false,
    error: null,
  },
  reducers: {
    toggleLoading(state) {
      state.loading = !state.loading;
    },

    showError(state, action) {
      state.error = action.payload.error;
    },
  },
});
