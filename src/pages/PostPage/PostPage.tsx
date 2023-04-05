import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
            <h1 className="boder-bottom-1">{post?.title}</h1>
            <small>{post?.createdAt && getTime(post.createdAt)}</small>
            <h3>{post?.body}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default PostPage;
