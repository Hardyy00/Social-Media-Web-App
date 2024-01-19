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
      console.log("state", state);
      state.authenticating = !state.authenticating;
    },

    showError(state, action) {
      console.log(action);
      state.error = action.payload.error;
    },

    authUser(state, action) {
      state.authData = action.payload.authData;
    },
  },
});

// login thunk
export function login(formData) {
  return async (dispatch) => {
    const fetchData = async (formData) => {
      try {
        const response = await fetch("http://localhost:8080/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.status >= 400) {
          const { message } = await response.json();
          throw new Error(message);
        }

        authSlice.actions.toggleAuthenticating();
        const resData = await response.json();
        authSlice.actions.toggleAuthenticating();

        return resData;
      } catch (err) {
        console.log(err.message);
        dispatch(authSlice.actions.showError({ error: err.message }));
        return null;
      }
    };

    console.log(formData);
    const data = await fetchData(formData);

    dispatch(authSlice.actions.authUser({ authData: data }));
  };
}

// signup thunk
export function signUp(formData) {
  return async (dispatch) => {
    const fetchData = async (formData) => {
      try {
        const response = await fetch("http://localhost:8080/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.status >= 400) {
          const { message } = await response.json();
          throw new Error(message);
        }

        authSlice.actions.toggleAuthenticating();
        const resData = await response.json();
        authSlice.actions.toggleAuthenticating();

        return resData;
      } catch (err) {
        dispatch(authSlice.actions.showError({ error: err.message }));
        return null;
      }
    };

    const data = await fetchData(formData);

    dispatch(authSlice.actions.authUser({ authData: data }));
  };
}

export const authActions = authSlice.actions;
export default authSlice.reducer;
