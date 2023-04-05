import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostForm from "../../Components/PostForm";

interface Posts {
  id: number;
  title: string;
  body: string;
}

const BlogsEdit = () => {
  const [post, setPost] = useState<Posts | null>(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/posts/${id}`).then((res) => {
      console.log(res);
      setPost(res?.data);
    });
  }, [id]);

  if (!post) return null;

  return (
    <>
      <h2>글 수정</h2>
      <PostForm post={post} />
    </>
  );
};

export default BlogsEdit;
