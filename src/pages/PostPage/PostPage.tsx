import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Posts {
  title: string;
  body: string;
  id: number;
}

const PostPage = () => {
  const [post, setPost] = useState<Posts | null>(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/posts/${id}`).then((res) => {
      setPost(res?.data);
    });
  }, [id]);

  return (
    <div>
      <div>
        <h2>{post?.title}</h2>
      </div>
      <div>
        <h4>{post?.body}</h4>
      </div>
    </div>
  );
};

export default PostPage;
