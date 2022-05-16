import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Home from "./scenes/Home/Home";
import About from "./scenes/About/About";
import Blogs from "./scenes/Blogs/Blogs";
import "./App.css";

function App() {
  let { id } = useParams();
  console.log(id)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path=":id" element={<Topics />} />
        <Route path=":store/:productId" element={<Topics1 />} /> */}
      </Routes>
    </Router>
  );
}
  




export default App