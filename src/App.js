// npx prettier --write .

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./scenes/Home/Home";
import Menu from "./scenes/Menu/Menu";
import Blogs from "./scenes/Blogs/Blogs";
import BlogAll from "./scenes/Blogs/components/BlogAll";
import Contacts from "./scenes/Menu/Components/scence/Contacts/Contacts";
import "./App.css";
import Users from "./scenes/Menu/Components/scence/Users/Users";
import Photos from "./scenes/Menu/Components/scence/Pfotos/Photos";
import Comments from "./scenes/Menu/Components/scence/Comments/Comments";
import Helps from "./scenes/Menu/Components/scence/Helps/Helps";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/contacts" element={<Contacts />} />
        <Route path="/menu/users" element={<Users />} />
        <Route path="/menu/photos" element={<Photos />} />
        <Route path="/menu/comments" element={<Comments />} />
        <Route path="/menu/helps" element={<Helps />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/blogs" element={<BlogAll />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
