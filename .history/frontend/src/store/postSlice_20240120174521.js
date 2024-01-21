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

    mutatePost(state, action) {
      const index = state.posts.findIndex(
        (item) => item._id === action.payload._id
      );

      state.posts[index] = action.payload;
    },
  },
});

export const loadPosts = (user) => {
  return async (dispatch) => {
    const fetchPosts = async (user) => {
      const posts = await fetch(
        `http://localhost:8080/post/${user._id}/timeline`
      );

      const resData = await posts.json();

      return resData;
    };

    const posts = await fetchPosts(user);

    dispatch(postSlice.actions.addAllPosts(posts));
  };
};

export const likeAndUnlike = (userId, postId) => {
  return async (dispatch) => {
    const fetcher = async (userId, postId) => {
      const post = await fetch(`http://localhost:8080/post/${postId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      const resData = await post.json();

      return resData;
    };

    const newPost = await fetcher(userId, postId);
    console.log(newPost);

    dispatch(postActions.mutatePost(newPost));
  };
};

export default postSlice.reducer;

export const postActions = postSlice.actions;
