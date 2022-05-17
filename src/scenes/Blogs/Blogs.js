import React from "react";
import Layout from "../../components/layouts/Layout/Layout";
import { Link } from "react-router-dom";
import MyButton from "../../components/atoms/Buttons/MyButton/MyButton";
import "./Blogs.css";

export default function Blogs() {
  return (
    <Layout>
      <div className="enterBloglist">
        <h1>It is blog list, if you whant see all blogs push Button</h1>
        <MyButton className="enterBloglist__btn">
          <Link to={"../blog/blogs#page=1"}>All blogs</Link>
        </MyButton>
      </div>
    </Layout>
  );
}
