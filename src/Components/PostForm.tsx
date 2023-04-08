import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostForm = ({ post, edits }: { post?: Post; edits?: boolean }) => {
  const [title, setTitle] = useState<string>(`${post ? post.title : ""}`);
  const [newTitle, setNewTitle] = useState<string>(`${post ? post.title : ""}`);
  const [body, setBody] = useState<string>(`${post ? post.body : ""}`);
  const [newBody, setNewBody] = useState<string>(`${post ? post.body : ""}`);
  const [publish, setPublish] = useState<boolean>(false);
  const navigate = useNavigate();

  console.log(publish);

  const onSubmit = () => {
    axios.post("http://localhost:8080/posts", {
      title,
      body,
      createdAt: Date.now(),
      publish,
    });
    navigate("/blogs");
  };

  const Edit = () => {
    axios.patch(`http://localhost:8080/posts/${post?.id}`, {
      title: newTitle,
      body: newBody,
      publish,
    });
    navigate(`/blogs/${post?.id}`);
  };

  const isEdit = () => {
    return title !== newTitle || body !== newBody;
  };

  const isPublish = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPublish(e.target.checked);
  };

  console.log(publish);

  return (
    <div>
      <div className="mb-3">
        <label className="form-lable ">제목</label>
        <input
          className="form-control"
          value={edits ? newTitle : title}
          onChange={(e) => {
            if (edits) {
              setNewTitle(e.target.value);
            } else {
              setTitle(e.target.value);
            }
          }}
          type="text"
        />
      </div>
      <div className="mb-3">
        <label className="form-lable ">내용</label>
        <textarea
          className="form-control"
          rows={15}
          value={edits ? newBody : body}
          onChange={(e) => {
            if (edits) {
              setNewBody(e.target.value);
            } else {
              setBody(e.target.value);
            }
          }}
        />
      </div>
      <div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={publish}
            onChange={(e) => {
              isPublish(e);
            }}
          />
          <label className="form-check-lable">private</label>
        </div>
        {post ? (
          <button
            className="btn btn-success"
            disabled={!isEdit()}
            onClick={Edit}
          >
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
          cancle
        </button>
      </div>
    </div>
  );
};

export default PostForm;
