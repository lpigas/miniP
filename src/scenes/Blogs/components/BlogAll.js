import React, { useState } from "react";
import Layout from "../../../components/layouts/Layout/Layout";
import BlogList from "./ComponentsBlogsAll/BlogList/BlogList";
import NextPrevPage from "./ComponentsBlogsAll/BlogList/ComponentsBlogList/NextPrev/NextPrevPage";

export default function BlogAll() {
  const [numberOfPage, setNumberOfPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  console.log(totalPages)
  return (
    <Layout>
      <div>
        <BlogList totalPages={totalPages} setTotalPages={setTotalPages}></BlogList>
      </div>
      <NextPrevPage numberOfPage={numberOfPage} setNumberOfPage={setNumberOfPage} totalPages={totalPages}/>
    </Layout>
  );
}
