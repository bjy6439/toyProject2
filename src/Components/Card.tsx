import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  title,
  id,
  children,
  createdAt,
}: {
  title: string;
  id: number;
  children: React.ReactNode;
  createdAt: number;
}) => {
  const getTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };
  const navigate = useNavigate();

  return (
    <div className="card mt-3">
      <div className="card-body">
        <div
          className="d-flex justify-content-between cursor-pointer z-index-2"
          onClick={() => {
            navigate(`/blogs/${id}`);
          }}
        >
          <div>
            <h3>{title}</h3>
            <small className="text-muted">{getTime(createdAt)}</small>
          </div>

          <div>{children && <div>{children}</div>}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
