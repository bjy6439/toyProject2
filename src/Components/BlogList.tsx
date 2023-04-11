import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import LodingSpiner from "./LodingSpiner";
import PagiNation from "./PagiNation";

interface Post {
  id: number;
  title: string;
  body: string;
  createdAt: number;
  publish: boolean;
}

const BlogList = ({ admin }: { admin?: boolean }) => {
  const [totalPage, setTotalPage] = useState<number>(0);
  const [thisPageNum, setThisPage] = useState<number>(1);
  const [postList, setPostList] = useState<Post[]>([]);
  const [loding, setLoding] = useState<boolean>(true);
  const [isPublish, setIsPublish] = useState<boolean>(false);
  const navigate = useNavigate();

  const pageNum = Math.ceil(totalPage / 5);

  const render = (page: number) => {
    setThisPage(page);

    let params: object = {
      _page: page,
      _limit: 5,
      _sort: "id",
      _order: "desc",
    };

    if (isPublish) {
      params = { ...params, publish: false };
    }

    axios
      .get(`http://localhost:8080/posts`, {
        params: params,
      })
      .then((res) => {
        setTotalPage(res.headers["x-total-count"]);
        setPostList(res.data);
        setLoding(false);
      });
  };

  useEffect(
    (page = 1) => {
      render(page);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isPublish]
  );

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
          {!admin && (
            <button className="btn btn-primary" onClick={renderPublish}>
              {isPublish ? "비공개글 보이기" : "비공개글 숨기기"}
            </button>
          )}
          <div>
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
                  publish={post.publish}
                >
                  {admin && (
                    <>
                      <button
                        className="btn btn-success m-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/blogs/edit/${post.id}`);
                        }}
                      >
                        edit
                      </button>
                      <button
                        className="btn btn-danger m-2"
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
          <PagiNation
            currentPage={thisPageNum}
            numberOfPages={pageNum}
            render={render}
          />
        </>
      );
    } else {
      return <h2>게시물이 없습니다.</h2>;
    }
  };

  return <div>{renderBlogList()}</div>;
};

export default BlogList;
