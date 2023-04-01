import React from "react";

const Card = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>{title}</div>
          <div>{children && <div>{children}</div>}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
