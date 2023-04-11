import React from "react";

const PagiNation = ({
  currentPage,
  numberOfPages,
  render,
}: {
  currentPage: number;
  numberOfPages: number;
  render: any;
}) => {
  return (
    <nav className="fixed-bottom" aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => {
              if (currentPage > 1) {
                render(currentPage - 1);
              }
            }}
          >
            Prev
          </button>
        </li>
        {Array(numberOfPages)
          .fill(1)
          .map((item, idx) => {
            return item + idx;
          })
          .map((pageNum: number) => {
            return (
              <li
                key={pageNum}
                className={`page-item ${
                  currentPage === pageNum ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => {
                    render(pageNum);
                  }}
                >
                  {pageNum}
                </button>
              </li>
            );
          })}
        <li className={`page-item `}>
          <button
            className="page-link"
            onClick={() => {
              if (numberOfPages > currentPage) {
                render(currentPage + 1);
              }
            }}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PagiNation;
