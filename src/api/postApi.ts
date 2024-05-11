import { api } from "./api";

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query({
      query() {
        return {
          url: "posts",
        };
      },
      providesTags: ["Posts"],
    }),
    getPost: build.query({
      query(id) {
        return {
          url: `posts/${id}`,
        };
      },
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = postApi;
