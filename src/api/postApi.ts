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
    deletePost: build.mutation({
      query(data) {
        const { id } = data;
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Posts"],
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
    createPost: build.mutation({
      query(body) {
        return {
          url: `posts`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
  useCreatePostMutation,
} = postApi;
