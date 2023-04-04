import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  title,
  id,
  children,
}: {
  title: string;
  id: number;
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();

  return (
    <div className="card mt-3">
      <div className="card-body">
        <div
          className="d-flex justify-content-between cursor-pointer"
          onClick={() => {
            console.log(id);
            navigate(`/blogs/${id}`);
          }}
        >
          <div>{title}</div>
          <div>{children && <div>{children}</div>}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
