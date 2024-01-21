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
  },
});
