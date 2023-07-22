import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  posts: [
    {
      id: uuid(),
      title: "post 1",
      content: "post 1 content",
      author: "Khalil Ahmad",
      createdAt: new Date().toISOString(),
    },
    {
      id: uuid(),
      title: "post 2",
      content: "post 2 content",
      author: "Mohammad",
      createdAt: new Date().toISOString(),
    },
  ],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    createPost: {
      reducer(state, action) {
        state.posts = [...state.posts, action.payload];
      },

      prepare(title, content, author) {
        return {
          payload: {
            id: uuid(),
            title,
            content,
            author,
            createdAt: new Date().toISOString(),
          },
        };
      },
    },
  },
});

export default postSlice.reducer;
