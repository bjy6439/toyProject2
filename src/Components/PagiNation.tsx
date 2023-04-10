import React from "react";
import { Link } from "react-router-dom";

const PagiNation = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <Link className="page-link" to="blogs/_page=1&_limit=5">
            Previous
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="_page=1">
            1
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="#">
            2
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="#">
            3
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="#">
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PagiNation;
