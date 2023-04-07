import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LodingSpiner from "../../Components/LodingSpiner";

interface Posts {
  title: string;
  body: string;
  id: number;
  createdAt: number;
}

const PostPage = () => {
  const [post, setPost] = useState<Posts | null>(null);
  const [loding, setLoding] = useState<Boolean>(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const getTime = (time: number) => {
    return new Date(time).toLocaleString();
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/posts/${id}`).then((res) => {
      setLoding(false);
      setPost(res?.data);
    });
  }, [id]);

  return (
    <>
      {loding ? (
        <LodingSpiner />
      ) : (
        <div>
          <div>
            <div className="d-flex">
              <h1 className="flex-grow-1">{post?.title}</h1>
              <div>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    navigate(`/blogs/edit/${id}`);
                  }}
                >
                  edit
                </button>
              </div>
            </div>
            <small>{post?.createdAt && getTime(post.createdAt)}</small>
            <hr />
            <h3>{post?.body}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default PostPage;
