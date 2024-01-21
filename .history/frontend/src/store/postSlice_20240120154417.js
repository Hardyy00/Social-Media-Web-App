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
      console.log(action.payload);
      state.posts.push(action.payload);
    },

    addAllPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;

export const postActions = postSlice.actions;
