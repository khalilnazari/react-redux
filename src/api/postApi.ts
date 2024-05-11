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
      providesTags: ["Posts"],
    }),
    updatePost: build.mutation({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `posts/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery, useUpdatePostMutation } =
  postApi;
