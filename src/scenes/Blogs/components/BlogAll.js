import React from "react";
import Layout from "../../../components/layouts/Layout/Layout";
import BlogList from "./ComponentsBlogsAll/BlogList/BlogList";

export default function BlogAll() {
  return (
    <Layout>
      <div>
        <BlogList></BlogList>
      </div>
    </Layout>
  );
}
