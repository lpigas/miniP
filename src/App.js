// npx prettier --write .

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./scenes/Home/Home";
import About from "./scenes/About/About";
import Blogs from "./scenes/Blogs/Blogs";
import BlogAll from "./scenes/Blogs/components/BlogAll";
import Contacts from "./scenes/About/Components/scence/Contacts/Contacts";
import "./App.css";
import Users from "./scenes/About/Components/scence/Users/Users";
import Photos from "./scenes/About/Components/scence/Pfotos/Photos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/contacts" element={<Contacts />} />
        <Route path="/about/users" element={<Users />} />
        <Route path="/about/photos" element={<Photos />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/blogs" element={<BlogAll />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
