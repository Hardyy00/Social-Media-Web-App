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

    authUser(state, action) {
      state.authData = action.payload.authData;
    },
  },
});

export function login(formData) {
  return async (dispatch) => {
    const fetchData = async (formData) => {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: "application/json",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.log("Error");
      }

      const resData = await response.json();

      return resData;
    };

    const data = fetchData(formData);

    dispatch(authSlice.actions.authUser({ authData: data }));
  };
}

export function signUp(formData) {
  return async (dispatch) => {
    const fetchData = async (formData) => {
      const response = await fetch("http://localhost:8080/auth/", {
        method: "POST",
        headers: "application/json",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        console.log("Error");
      }

      const resData = await response.json();

      return resData;
    };

    const data = fetchData(formData);

    dispatch();
  };
}

export const authActions = authSlice.actions;
export default authSlice.reducer;
