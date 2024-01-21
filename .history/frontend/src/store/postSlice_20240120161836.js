import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
};

const postSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    addPost(state, action) {
      state.posts.push(action.payload);
    },

    addAllPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export const loadPosts = (user) => {
  return (dispatch) => {
    const fetchPosts = async () => {
      const posts = await fetch(`http://localhost:8080/${user._id}/timeline`);

      const resData = await posts.json();

      return resData;
    };
  };
};

export default postSlice.reducer;

export const postActions = postSlice.actions;
