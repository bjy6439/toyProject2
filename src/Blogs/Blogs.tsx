import axios from "axios";
import React, { useState } from "react";

const Blogs = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const onSubmit = () => {
    axios.post("http://localhost:8080/posts", {
      title,
      body,
    });
  };

  return (
    <div className="container">
      <h2 className="mt-2">Create a Blog Post</h2>
      <div className="mb-3">
        <label className="form-lable ">Title</label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
        />
      </div>
      <div className="mb-3">
        <label className="form-lable ">body</label>
        <textarea
          className="form-control"
          rows={15}
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-primary" onClick={onSubmit}>
        Post
      </button>
    </div>
  );
};

export default Blogs;
