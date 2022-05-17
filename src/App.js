// npx prettier --write .

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./scenes/Home/Home";
import About from "./scenes/About/About";
import Blogs from "./scenes/Blogs/Blogs";
import BlogAll from "./scenes/Blogs/components/BlogAll";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/blogs" element={<BlogAll />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path=":id" element={<Topics />} />
        <Route path=":store/:productId" element={<Topics1 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
