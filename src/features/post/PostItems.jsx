import moment from "moment";
import React from "react";

const PostItems = ({ posts }) => {
  console.log(posts);

  const sortedPost = posts
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <div>
      {sortedPost.map((post, index) => {
        return (
          <div key={index} className="post-item">
            <h3>{post?.title}</h3>
            <p>{post?.content}</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <small>{post?.author}</small>
              <small>{post?.createdAt}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostItems;
