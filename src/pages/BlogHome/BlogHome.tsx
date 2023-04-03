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
  const [loding, setLoding] = useState<Boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/posts").then((res) => {
      setPostList(res.data);
      setLoding(false);
    });
  }, []);

  const PostDel = (id: number) => {
    axios.delete(`http://localhost:8080/posts/${id}`).then(() => {
      setPostList((prev) => prev.filter((post) => post.id !== id));
    });
  };

  const renderBlogList = () => {
    if (loding) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }

    if (postList.length !== 0) {
      return (
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
      );
    } else {
      return <h2>게시물이 없습니다.</h2>;
    }
  };

  return (
    <>
      <h1>글 목록</h1>
      {renderBlogList()}
    </>
  );
};

export default BlogHome;
