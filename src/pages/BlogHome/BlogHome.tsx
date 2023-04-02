import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card";
import { useNavigate } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  body: string;
}

const BlogHome = () => {
  const [postList, setPostList] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/posts").then((res) => {
      setPostList(res.data);
    });
  }, [postList]);

  const PostDel = (id: number) => {
    console.log(id);
    axios.delete(`http://localhost:8080/posts/${id}`);
  };

  return (
    <>
      <h1>글 목록</h1>
      {postList ? (
        <div>
          {postList.map((post) => {
            return (
              <Card key={post.id} title={post.title}>
                <>
                  <button
                    className="btn btn-success m-2 btn-sm"
                    onClick={() => {
                      navigate(`/blogs/edit/${post.id}`);
                    }}
                  >
                    edit
                  </button>
                  <button
                    className="btn btn-danger m-2 btn-sm"
                    onClick={() => {
                      PostDel(post.id);
                    }}
                  >
                    delete
                  </button>
                </>
              </Card>
            );
          })}
        </div>
      ) : (
        <h2>아무것도 없움</h2>
      )}
    </>
  );
};

export default BlogHome;
