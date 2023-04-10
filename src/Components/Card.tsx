import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  title,
  id,
  children,
  createdAt,
  publish,
}: {
  title?: string;
  id?: number;
  children?: React.ReactNode;
  createdAt: number;
  publish?: boolean;
}) => {
  const getTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };
  const navigate = useNavigate();

  return (
    <div className="card mt-3 ">
      <div className="card-body p-2 ">
        <div
          className="d-flex justify-content-between z-index-2"
          onClick={() => {
            navigate(`/blogs/${id}`);
          }}
        >
          <div>
            <h4>{title}</h4>
            <small className="text-muted">{getTime(createdAt)}</small>
            {publish && <small> 비공개</small>}
          </div>

          <div>{children && <div>{children}</div>}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
