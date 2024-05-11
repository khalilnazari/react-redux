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
  }),
});

export const { useGetPostsQuery } = postApi;
