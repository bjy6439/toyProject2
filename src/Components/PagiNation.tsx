import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PagiNation = ({
  currentPage,
  numberOfPages,
}: {
  currentPage: string;
  numberOfPages: number;
}) => {
  const navigate = useNavigate();
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {/* <li className="page-item disabled">
          <Link className="page-link" to="/">
            Previous
          </Link>
        </li> */}
        {Array(numberOfPages)
          .fill(1)
          .map((item, idx) => {
            return item + idx;
          })
          .map((pageNum, idx) => {
            return (
              <li
                key={idx}
                className={`page-item ${
                  currentPage === `${pageNum}` ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => {
                    navigate(`${pageNum}`);
                  }}
                >
                  {pageNum}
                </button>
              </li>
            );
          })}
        {/* <li className={`page-item ${currentPage === "4" ? "active" : ""}`}>
          <Link className="page-link" to="#">
            Next
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default PagiNation;
