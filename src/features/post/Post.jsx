import React from "react";
import PostItems from "./PostItems";
import { useSelector } from "react-redux";
import AddPostForm from "./AddPostForm";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <div>
      <h2>Posts</h2>
      <AddPostForm />
      <PostItems posts={posts} />
    </div>
  );
};

export default Post;
