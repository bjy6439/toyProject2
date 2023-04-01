import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogHome from "./pages/BlogHome/BlogHome";
import Nav from "./Components/Nav";
import Main from "./pages/Main/Main";
import BlogsEdit from "./pages/BlogsEdit/BlogsEdit";
import Blogs from "./pages/BlogsCreate/BlogsCreate";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blogs" element={<BlogHome />} />
          <Route path="/blogs/create" element={<Blogs />} />
          <Route path="/blogs/edit" element={<BlogsEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
