import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Authentication",
  initialState: {
    authData: null,
    authenticating: false,
    error: null,
  },
  reducers: {
    toggleAuthenticating(state) {
      state.authenticating = !state.authenticating;
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        authSlice.actions.showError({ error: await response.json() });
        return null;
      }
      authSlice.actions.toggleAuthenticating();
      const resData = await response.json();
      authSlice.actions.toggleAuthenticating();

      return resData;
    };

    console.log(formData);
    const data = await fetchData(formData);
    console.log(data);

    dispatch(authSlice.actions.authUser({ authData: data }));
  };
}

export function signUp(formData) {
  return async (dispatch) => {
    const fetchData = async (formData) => {
      const response = await fetch("http://localhost:8080/auth/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        authSlice.actions.showError({ error: await response.json() });
        return null;
      }

      const resData = await response.json();

      return resData;
    };

    const data = await fetchData(formData);

    dispatch(authSlice.actions.authUser({ authData: data }));
  };
}

export const authActions = authSlice.actions;
export default authSlice.reducer;
