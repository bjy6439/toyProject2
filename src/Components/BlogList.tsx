import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import LodingSpiner from "./LodingSpiner";

interface Post {
  id: number;
  title: string;
  body: string;
  createdAt: number;
  publish: boolean;
}

const BlogList = ({ admin }: { admin?: boolean }) => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loding, setLoding] = useState<boolean>(true);
  const [isPublish, setIsPublish] = useState<boolean>(false);
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
      return <LodingSpiner />;
    }

    const renderPublish = () => {
      setIsPublish(!isPublish);
    };

    if (postList.length !== 0) {
      return (
        <>
          <div>
            <button className="btn btn-primary" onClick={renderPublish}>
              비공개글 숨기기
            </button>
            {postList.map((post) => {
              if (isPublish === true && post.publish === true) {
                return null;
              }
              return (
                <Card
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  createdAt={post.createdAt}
                >
                  {admin && (
                    <>
                      <button
                        className="btn btn-success m-2 btn-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/blogs/edit/${post.id}`);
                        }}
                      >
                        edit
                      </button>
                      <button
                        className="btn btn-danger m-2 btn-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          PostDel(post.id);
                        }}
                      >
                        delete
                      </button>
                    </>
                  )}
                </Card>
              );
            })}
          </div>
        </>
      );
    } else {
      return <h2>게시물이 없습니다.</h2>;
    }
  };

  return <div>{renderBlogList()}</div>;
};

export default BlogList;
