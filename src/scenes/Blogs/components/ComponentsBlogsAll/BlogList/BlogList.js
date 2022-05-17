import React, { useState } from "react";
import "./BlogList.css";
import MyButton from "../../../../../components/atoms/Buttons/MyButton/MyButton";
import Select from "../../../../../components/atoms/Select/Select";
import BlogForm from "../Blogform/BlogForm";

export default function BlogList() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Blog number 1", body: "popka1" },
    { id: 2, title: "Blog number 2", body: "popka2" },
    { id: 3, title: "Blog number 3", body: "popka3" },
  ]);
  const selectMenuOptions = [
    { name: "10blogs", value: "10" },
    { name: "20blogs", value: "20" },
    { name: "50blogs", value: "50" },
  ];
  const changeSelectBlogsPage = (e) => {
    console.log(e);
  };
  const deleteBlog = (delBlog) => {
    setBlogs(blogs.filter((item) => item !== delBlog));
  };
  const changeBlog = (change) => {
    console.log(change);
  };
  return (
    <div className="allBlogs">
      <div className="allBlogs__menu">
        <div className="allBlogs__menu-button">
          <MyButton className="allBlogs__menu--button">Add NEW Blog</MyButton>
          <MyButton className="allBlogs__menu--button">Reset</MyButton>
        </div>
      </div>
      <div className="allBlogs__menu--selest">
        <Select
          options={selectMenuOptions}
          onChange={(e) => changeSelectBlogsPage(e)}
        />
      </div>
      <div></div>
      {console.log(blogs.length)}
      {blogs.length > 0 ? (
        blogs.map((item) => (
          <BlogForm
            dataForm={item}
            key={item.id}
            deleteBlog={deleteBlog}
            changeBlog={changeBlog}
          />
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>No any blogs yet</h1>
      )}
    </div>
  );
}
