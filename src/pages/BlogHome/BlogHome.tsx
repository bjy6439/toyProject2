import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card";

interface Post {
  id: number;
  title: string;
  body: string;
}

const BlogHome = () => {
  const [postList, setPostList] = useState<Post[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/posts").then((res) => {
      setPostList(res.data);
    });
  }, []);

  return (
    <div>
      <h1 className="mt-2">Blogs</h1>
      {postList.map((post) => {
        return (
          <Card key={post.id} title={post.title}>
            <>
              <button>edit</button>
              <button>delete</button>
            </>
          </Card>
        );
      })}
    </div>
  );
};

export default BlogHome;
