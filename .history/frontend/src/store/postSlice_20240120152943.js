import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.posts.push(action.payload);
    },

    addAllPosts(state, action) {
      state.posts = action.payload;
    },
  },
});

export default postSlice.reducer;

export const postActions = postSlice.actions;
