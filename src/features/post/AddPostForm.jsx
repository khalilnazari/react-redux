import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postSlice } from "../../store/reducers/postSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title && !content && !author) {
      alert("Fill all fields");
    }

    dispatch(postSlice.actions.createPost(title, content, author));

    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <div className="post-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="Author">Author</label>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            name="Author"
            id="Author"
          />
        </div>
        <div className="form-item">
          <label htmlFor="title">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className="form-item">
          <label htmlFor="content">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="content"
            rows="5"
            id="content"
          ></textarea>
        </div>
        <div className="form-item">
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;
