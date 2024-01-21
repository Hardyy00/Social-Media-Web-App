import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  authData: null,
  authenticating: false,
  error: null,
};

const authSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    toggleAuthenticating(state) {
      state.authenticating = !state.authenticating;
    },

    showError(state, action) {
      console.log(action);
      state.error = action.payload.error;
    },

    authUser(state, action) {
      state.authData = action.payload.authData;
    },

    logout(state) {
      // eslint-disable-next-line no-unused-vars
      localStorage.clear();

      // eslint-disable-next-line no-unused-vars
      state.token = null;
      state.authData = null;
      state.authenticating = false;
      state.error = null;
    },

    updateAuthData(state,action){
      state.authData = action.payload
    }

    setToken(state, action) {
      state.token = action.payload.token;
    },
  },
});

// login thunk
export function login(formData) {
  return async (dispatch) => {
    dispatch(authSlice.actions.toggleAuthenticating());
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

        const resData = await response.json();

        return resData;
      } catch (err) {
        dispatch(authSlice.actions.showError({ error: err.message }));
        return null;
      }
    };

    const data = await fetchData(formData);
    dispatch(authSlice.actions.toggleAuthenticating());

    dispatch(authSlice.actions.authUser({ authData: data.user }));
    dispatch(authSlice.actions.setToken({ token: data.token }));

    localStorage.setItem("authData", JSON.stringify(data.user));
    localStorage.setItem("token", JSON.stringify(data.token));
  };
}

// signup thunk
export function signUp(formData) {
  return async (dispatch) => {
    dispatch(authSlice.actions.toggleAuthenticating());

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

        const resData = await response.json();

        return resData;
      } catch (err) {
        dispatch(authSlice.actions.showError({ error: err.message }));
        return null;
      }
    };

    const data = await fetchData(formData);
    dispatch(authSlice.actions.toggleAuthenticating());

    dispatch(authSlice.actions.authUser({ authData: data.user }));
    dispatch(authSlice.actions.setToken({ token: data.token }));

    localStorage.setItem("authData", JSON.stringify(data.user));
    localStorage.setItem("token", JSON.stringify(data.token));
  };
}

export const authActions = authSlice.actions;
export default authSlice.reducer;
