import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./Blogs/Blogs";
import Nav from "./Components/Nav";
import Main from "./Main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
