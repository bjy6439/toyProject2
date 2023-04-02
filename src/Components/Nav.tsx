import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar bg-dark navbar-dark navbar-expand-lg mb-5">
      <div className="container">
        <Link className="navbar-brand" to="/">
          재로그
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <Link className="navbar-brand" to="/blogs/create">
          글쓰기
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
