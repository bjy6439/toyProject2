import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostForm = ({ post }: { post?: Post }) => {
  const [title, setTitle] = useState<string>(`${post ? post.title : ""}`);
  const [body, setBody] = useState<string>(`${post ? post.body : ""}`);
  const navigate = useNavigate();

  const onSubmit = () => {
    axios.post("http://localhost:8080/posts", {
      title,
      body,
      createdAt: Date.now(),
    });
    navigate("/blogs");
  };

  const Edit = () => {
    axios.patch(`http://localhost:8080/posts/${post?.id}`, {
      title,
      body,
    });
    navigate("/blogs");
  };

  return (
    <div>
      <div className="mb-3">
        <label className="form-lable ">제목</label>
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
        <label className="form-lable ">내용</label>
        <textarea
          className="form-control"
          rows={15}
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </div>
      <div>
        {post ? (
          <button className="btn btn-success" onClick={Edit}>
            edit
          </button>
        ) : (
          <button className="btn btn-primary" onClick={onSubmit}>
            Post
          </button>
        )}
        <button
          className="btn btn-danger m-2"
          onClick={() => {
            navigate("/blogs");
          }}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default PostForm;
